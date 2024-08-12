import {URL} from "../../../tools/connections/url";
export let options = {
    headAndKey: [
        { head: "Id", key: "id" },
        { head: "Nombre", key: "name" },
        { head: "Apellido", key: "last_name" },
    ],
    url: `${URL}/supplier/name?page=0&size=5`,
    keyObject: (object) => {
        return object.name + " " + object.last_name;
    },
    keySearch: "name",
    styleInput: "width:20em"
};


export const objectInvoice = (object)=>{
    console.log(object)
    return {
        "numberInvoice": "1111",
        "supplier": {"id": 1,},
        "detailProductInvoiceSuppliers": [
            {
                "id": 1,
                "productId": 1,
                "quality": 5.0,
                "internalCode": "01PRO",
                "idSupplierOne": "PRO01",
                "description": "Producto",
                "costPrice": 100.0,
                "price": 150.0,
                "totalPrice": 750.0,
                "totalCostPrice": 500.0
            }
        ],
        "salesPerson": {"id": 1,},
        "company": {"id": 1,},
        "fiscalStatus": "Responsable Inscripto",
        "paymentType": "Efectivo",
        "date": "26/07/2024",
        "dueDate": "26/34/2024",
        "total": 500.0
    }
}

const detailPRoduct = (detailsProducts)=>{
    
}