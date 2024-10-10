import { writable } from "svelte/store";

let datosCarrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
export const carrito = writable(datosCarrito);

export const datos = {
    "cae": "",
    "caeFchVto": null,
    "salesPerson": {
        "shift": "",
        "auth": "",
        "comission": 0.0,
        "id": 1,
        "name": "Vendedor",
        "last_name": "Apellido Vendedor",
        "address": "Dirección de Vendedor",
        "email": "email@vendedor.com",
        "phone": "111111",
        "mobile_phone": "1111111",
        "idPersonal": "11-1111111111-1",
        "img": "https://img.freepik.com/fotos-premium/retrato-hombre-negocios-expresion-cara-seria-fondo-estudio-espacio-copia-bengala-persona-corporativa-enfoque-pensamiento-duda-mirada-facial-dilema-o-concentracion_590464-84924.jpg"
    },
    "customer": {
        "id": 2,
        "name": "Benjamín ",
        "last_name": "Gomez",
        "address": "Leopoldo Lugones 726",
        "email": "benjidfer@outlook.com",
        "phone": "12233000",
        "mobile_phone": "03625635884",
        "idPersonal": "35307058",
        "fiscal_status": "Consumidor Final",
        "current_account": 0.0,
        "discount": 0.0
    },
    "company": {
        "id": 1,
        "name": "Empresa",
        "business_name": "Nombre de Empreas",
        "cuit": "11-111111111-1",
        "address": "Dirección de Empresa",
        "fiscal_status": "Monotributo",
        "business_activity": "21/08/2024"
    },
    "paymentType": "Efectivo",
    "fiscalStatus": "Consumidor Final",
    "detailProductList": [

    ],
    "numberInvoice": "F-T 12",
    "total": 650.0,
    "totalCost": 625.0,
    "discount": null,
    "date": "27/08/2024 19:18",
    "idStatePayment": ""
}