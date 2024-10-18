import {URL} from "../../../tools/connections/url";
import {getCurrentDate} from "../../../tools/dataNow/DataNow"
export const createExpenses =async (e, salesPerson) => {
    let object = {
        "description": e.target.description.value,
        "amount": e.target.amount.value,
        "salesPerson": salesPerson,
        "paymentType": e.target.paymentType.value,
        "date": getCurrentDate()
    }

    return await createExpensesService(object);
}


const createExpensesService=async (object)=>{
    try {
        
        let response =await fetch(URL+"/expenses",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(object)
        });
        let json = await response.json();
        return json; 
    } catch (error) {
        console.error(error);
        return false;
    }
}