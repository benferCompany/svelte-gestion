import { URL } from "../../../components/tools/connections/url";

export const getPayments = async (email) => {
    try {
        const response = await fetch(`${URL}/mercadoPago/getPayments/${email}`)
        const json = await response.json();
        return json;
    } catch (error) {
        console.log("Hubo un error al intentar obtener los pagos", error);
        return false;
    }
}


export const getShippingStatus = async (id) => {
    const response = {
        id,
        status: true,
        address: "Leopoldo lugones 726"
    }
    return response.status;
}