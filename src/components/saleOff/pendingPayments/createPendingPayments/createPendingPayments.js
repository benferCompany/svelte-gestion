import {URL} from "../../../tools/connections/url";
import {getCurrentDate} from "../../../tools/dataNow/DataNow";

export const createPendingPayments =async (e,salesPerson)=>{
   
    let object ={
        "description": e.target.description.value,
        "amount": e.target.amount.value,
        "isPaid": false,
        "paymentType": e.target.paymentType.value,
        "salesPerson":salesPerson,
        "date": getCurrentDate()
    }

    return await createPendingPaymentsService(object);

}

const createPendingPaymentsService=async(object)=>{
    try {
        let response = await fetch(URL+"/pendingPayments",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(object)
        })
        let json = await response.json();
        return json;
    } catch (error) {
        console.error("Algo salió mal con pendingPayments",error)
        return false;
    }
}