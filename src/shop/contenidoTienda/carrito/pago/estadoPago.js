import { URL } from "../../../../components/tools/connections/url";
export const getPago = async (id) => {
    try{

        let response = await fetch(`${URL}/mercadoPago/pago/${id}`)
        let json = await response.json();
        return json;
    }catch(error){
        console.error("Hubo un error al obtener el pago por id:",error)
        return false;
    }
}

export const createPaymentOder = async(paymentOrder)=>{
    try{
        const response = await fetch(`${URL}/mercadopago/payments`,{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(paymentOrder)
        })
        const json = await response.json();
        return json;
    }catch(error){
        console.error("Hubo un problema al crear una orden de pago", error);
        return false
    }
}