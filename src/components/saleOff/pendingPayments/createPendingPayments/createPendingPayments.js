import {URL} from "../../../tools/connections/url";
import {getCurrentDate} from "../../../tools/dataNow/DataNow";

export const createPendingPayments =async (e,salesPerson)=>{
    console.log(e.target.amount.value);

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
        console.log(json)
        return json;
    } catch (error) {
        console.log("Algo salió mal con pendingPayments",error)
    }
}