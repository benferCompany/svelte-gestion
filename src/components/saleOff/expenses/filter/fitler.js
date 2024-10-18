import { URL } from "../../../tools/connections/url";
export const getOutFlows = async () => {
    try {
        let response = await fetch(URL + "/outflows");
        let json = await response.json()
        return json;

    } catch (error) {
        console.error("Algo salió mal con OutFlows", error)
        return false;
    }
}