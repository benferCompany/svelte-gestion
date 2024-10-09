import { writable } from "svelte/store";
import { URL } from "../../tools/connections/url";
import { getCurrentDate } from "../../tools/dataNow/DataNow";
export let options = {
    headAndKey: [
        { head: "Id", key: "id" },
        { head: "Nombre", key: "name" },
        { head: "Apellido", key: "last_name" },
    ],
    url: `${URL}/customer/name?page=0&size=5`,
    keyObject: (object) => {
        return object.name + " " + object.last_name;
    },
    keySearch: "name",
    styleInput: "width:20em"
};

export const salePdf = writable({});

export const getCAE = async (object) => {
    let customer = object.customer;
    let docTipo
    if (object.customer.fiscal_status == "Consumidor Final") {
        docTipo = 96;
    } else if (object.customer.fiscal_status == "Responsable Inscripto" || object.customer.fiscal_status == "Responsable Monotributo") {
        docTipo = 80
    }

    let solicitudCAE = {
        "postHeader": {
            "url": "https://wswhomo.afip.gov.ar/wsfev1/service.asmx",
            "contentType": "text/xml;charset=UTF-8",
            "soapAction": "http://ar.gov.afip.dif.FEV1/FECompUltimoAutorizado",
            "xml": "<xml>Some content</xml>"
        },
        "concepto": 1,
        "docTipo": docTipo,
        "docNro": customer.idPersonal,
        "cbteDesde": 1,
        "cbteHasta": 1,
        "cbteFch": getCurrentDateFormatted(),
        "impTotal": object.total,
        "impTotConc": 0.0,
        "impNeto": object.total,
        "impOpEx": 0,
        "impTrib": 0,
        "impIVA": 0,
        "monId": "PES",
        "monCotiz": 1
    }
    try {
        let send = await fetch(URL + "/getCAE/string", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(solicitudCAE),
        })
        let json = await send.json();
        return json.FECAESolicitarResponse.FECAESolicitarResult.FeDetResp.FECAEDetResponse;
    } catch (error) {

    }
}

function getCurrentDateFormatted() {
    // Crear un objeto Date con la fecha actual
    const today = new Date();

    // Obtener el año, mes y día
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses son de 0 a 11, por eso se suma 1
    const day = String(today.getDate()).padStart(2, '0');

    // Concatenar los valores en el formato deseado
    const formattedDate = `${year}${month}${day}`;

    return formattedDate;
}

export function convertToReadableDate(dateString) {
    // Verificar que la cadena tenga exactamente 8 caracteres
    if (dateString.length !== 8) {
        throw new Error("Formato de fecha inválido. Debe ser 'YYYYMMDD'.");
    }

    // Extraer año, mes y día de la cadena
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);

    // Formatear la fecha como 'DD/MM/YYYY'
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
}

export const createInvoice = async (invoice) => {
    let jsonReponse = {
        body: "",
        status: false,
        error: ""
    }
    try {

        let response = await fetch(URL + "/details", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jsonInvoice(invoice))
        })
        jsonReponse.body = await response.json();
        jsonReponse.status = true;
        return jsonReponse;

    } catch (error) {
        jsonReponse.status = false;
        jsonReponse.body = "Algo salio mal en la consulta";
        jsonReponse.error = error;
    }
}


const jsonInvoice = (invoice) => {
    console.log(invoice)
    return {
        "cae": invoice.CAE,
        "caeFchVto": invoice.CAEFchVto,
        "numberInvoice": invoice.CbteDesde,
        "salesPerson": invoice.salePerson,
        "customer": invoice.customer,
        "company": invoice.company,
        "paymentType": invoice.paymentType,
        "fiscalStatus": invoice.fiscalstatus,
        "detailProductList": jsonInvoceProduct(invoice),
        "total": invoice.total,
        "costTotal": invoice.costTotal,
        "date": getCurrentDate(),
    }
}

const jsonInvoceProduct = (invoice) => {
    let arrayObject = [];
    for (let i = 0; i < invoice.products.length; i++) {
        const product = invoice.products[i];

        let arrayJson =
        {
            "productId": product.id,
            "quality": product.count,
            "discount": product.discount,

        }


        arrayObject.push(arrayJson);

    }

    return arrayObject;


}


export let typeOfPayment = [
    "Efectivo",
    "Tarjeta de credito",
    "Debito",
    "Transferencia",
];
export let fiscalStatus = [
    "Consumidor Final",
    "Responsable Monotributo",
    "Responsable Inscripto",
    "Excento",
];
export let typeInvoice = [{ "type": "T", "name": "Ticket" }, { "type": "C", "name": "Factura C" }, { "type": "X", "name": "Presupuesto" }]

export const clickBoton = async (object, viewInvoice) => {

    if (object.customer && object.typeInvoice.type == "C") {
        let CAE = await getCAE(object);
        console.log(CAE)
        object.CAE = CAE.CAE;
        object.CAEFchVto = convertToReadableDate(
            CAE.CAEFchVto + "",
        );
        object.CbteDesde = "FE-" + object.typeInvoice.type + " " + CAE.CbteDesde;

        if (CAE) {

            await createInvoice(object);
            viewInvoice(object);
            return;
        }
    }
    console.log("pas")
    object.CAE = ""
    object.CAEFchVto = ""
    object.CbteDesde = "F-" + object.typeInvoice.type + " 12"
    await createInvoice(object);
    viewInvoice(object);
    
}
