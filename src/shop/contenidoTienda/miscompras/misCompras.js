import { URL } from "../../../components/tools/connections/url";

export const getPayments=async(email)=>{
    try{
        const response = await fetch(`${URL}/mercadoPago/payments/${email}`)
        const json = await response.json();
        return json;
    }catch(error){
        console.log("Hubo un error al intentar obtener los pagos",error);
        return false;
    }
}