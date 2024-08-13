import { URL } from "../../../tools/connections/url";

export const getPendingPayments = async () => {
    try {

        let response = await fetch(URL + "/pendingPayments");
        let json = await response.json();
        return json;
    } catch (error) {
        console.log("Hubo un problema al obtener pendingPayments", error)
    }
} 