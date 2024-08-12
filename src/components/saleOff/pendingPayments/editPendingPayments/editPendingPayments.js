import { URL } from "../../../tools/connections/url";
import { getCurrentDate } from "../../../tools/dataNow/DataNow"
export const editPendingPayments = async (e) => {
    console.log(e.target.salesPerson.value)
    let object = {
        "id": e.target.id.value,
        "description": e.target.description.value,
        "amount": e.target.amount.value,
        "isPaid": e.target.isPaid.value == "on" ? true : false,
        "paymentType": e.target.paymentType.value,
        "salesPerson": JSON.parse(e.target.salesPerson.value),
        "date": getCurrentDate()
    }

    return await editPendingPaymentsService(object);
}

const editPendingPaymentsService = async (object) => {
    try {
        let response = await fetch(URL + "/pendingPayments", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(object)
        }
        )
        let json = await response.json();
        return json;
    }catch(error){
        console.log("Algo salio mal con createPendingPayments",error);
    }
}