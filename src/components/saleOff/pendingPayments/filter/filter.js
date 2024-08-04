import { URL } from "../../../tools/connections/url";

export const getPendingPayments = async () => {
    try {

        let json = await response.json();
        let response = await fetch(URL + "/pendingPayments");
        return json;
    } catch (error) {
        console.log("Hubo un problema al obtener pendingPayments",error)
    }
} 