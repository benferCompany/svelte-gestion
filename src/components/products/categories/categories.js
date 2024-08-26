import {URL} from "../../tools/connections/url"
export const getCategories =async ()=>{
    try {
        const response = await fetch(`${URL}/categories`);
        const json = await response.json();
        return json;
        
    } catch (error) {
        console.log("Hubo un error al importar las categorias desde la base de datos",error)
    }
}


