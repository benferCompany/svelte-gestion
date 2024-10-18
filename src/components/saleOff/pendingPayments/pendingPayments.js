import { URL } from "../../tools/connections/url"

export const deletependingPayments = async (id) => {
    try {
        let response = await fetch(URL + "/pendingPayments/" + id, {
            method: "DELETE"
        }
        )
        let json = await response.json();
       
        return json;
    } catch (error) {
        console.error("Algo salio mal", error)
        return false;
    }
}