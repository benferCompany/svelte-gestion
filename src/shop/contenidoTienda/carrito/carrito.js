import { writable } from "svelte/store";
let datosCarrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
export const carrito = writable(datosCarrito);
export const datos = {
    "id": 1,
    "cae": "",
    "caeFchVto": null,
    "salesPerson":{},
    "customer":{},
    "company": {},
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