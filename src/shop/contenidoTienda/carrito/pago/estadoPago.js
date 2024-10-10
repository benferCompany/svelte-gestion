import { URL } from "../../../../components/tools/connections/url";
export const getPago = async (id) => {
    let response = await fetch(`${URL}/mercadoPago/pago/${id}`)
    let json = await response.json();
    console.log(json)
}

export const createDetails = async (details) => {
    try {
        const response = await fetch(`${URL}/details`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(details)
        })
        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Hubo un error al intentar crear detalles de compra", error);
        return false;
    }
}