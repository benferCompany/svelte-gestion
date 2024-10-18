import { URL } from "../../tools/connections/url";

const getClosingNow=async()=>{
    try{

        let response = await fetch(URL+"/closing/byDate");
        let json = await response.json();
        return json;
    }catch(e){
        console.error("algo salio mal",e)
        return false;
    }
}

 const getValueStore = async()=>{
    let response  = await fetch(URL+"/stores/valueStore");
    let float = parseFloat(await response.text());
    return float;
}

export function getDateNow() {
    const date = new Date();

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses empiezan en 0
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
}


export const closing =async()=>{
    const closingNow = await getClosingNow();
    closingNow.active.value_store = await getValueStore();
    
    for (let i = 0; i < closingNow.movements.details.length; i++) {
        let item = closingNow.movements.details[i];
        if (item.paymentType === "Efectivo") {
            closingNow.active.cash = closingNow.active.cash + item.total;
        } else if (item.paymentType === "Cuenta Corriente") {
            closingNow.active.current_account =
                closingNow.active.current_account + item.total;
        } else {
            closingNow.active.account_bank =
                closingNow.active.account_bank + item.total;
        }
        closingNow.capital.profit =
            closingNow.capital.profit + (item.total - item.totalCost);
    }

    for(let otFw of closingNow.movements.outFlows){
        if(otFw.paymentType ==="Efectivo"){
            closingNow.active.cash = closingNow.active.cash - otFw.payment;
        }
        closingNow.passive.outFlows = closingNow.passive.outFlows + otFw.payment;
        closingNow.capital.profit = closingNow.capital.profit - otFw.payment;
    }

    closingNow.active.total =
        closingNow.active.cash +
        closingNow.active.account_bank +
        closingNow.active.current_account +
        closingNow.active.value_store;

    closingNow.passive.total =
        closingNow.passive.account_suppliers +
        closingNow.passive.pending_payments;

    closingNow.capital.total =
        closingNow.capital.capital_social + closingNow.capital.profit;
    return closingNow;

} 