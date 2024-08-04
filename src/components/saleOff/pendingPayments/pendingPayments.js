import { URL } from "../../tools/connections/url"

export const deletependingPayments = async (id) => {
    try {
        let response = await fetch(URL + "/pendingPayments/" + id, {
            method: "DELETE"
        }
        )
        let json = await response.json();
        console.log(json)
        return json;
    } catch (error) {
        console.log("Algo salio mal", error)
    }
}