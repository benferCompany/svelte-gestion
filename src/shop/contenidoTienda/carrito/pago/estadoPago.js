import {URL} from "../../../../components/tools/connections/url";
export const getPago= async(id)=>{
    let response= await fetch(`${URL}/mercadoPago/pago/${id}`)
    let json = await response.json();
    console.log(json)
}