import { getCurrentDate } from "../../../tools/dataNow/DataNow";
import {URL} from "../../../tools/connections/url";
export const editExpenses =async (e, salesPerson) => {
    let object = {
        "id": e.target.id.value,
        "description": e.target.description.value,
        "amount": e.target.amount.value,
        "salesPerson": salesPerson,
        "paymentType": e.target.paymentType.value,
        "date": getCurrentDate()
    }
    return await editExpensesService(object);
}

const editExpensesService = async (object) => {
    try {
        let response = await fetch(URL + "/expenses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(object)
        })
        let json = await response.json();
        return json;
    } catch (error) {
        console.error("Hubo un error al editar expensas.",error);
    }
}