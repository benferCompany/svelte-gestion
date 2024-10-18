import {URL} from "../../../components/tools/connections/url";
export const getProducts = async () => {
    try{

        let response = await fetch(`${URL}/products/name`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ description: "" }),
        });
        let json = await response.json();
        return json;
    }catch(error){
        console.error("Hubo un problema al querer obtener productos",error);
        return false;
    }
}