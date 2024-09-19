import { URL } from "../../../../tools/connections/url";


export const getCategories = async()=>{
    try{
        const response = await fetch(`${URL}/categories`);
        const json = await response.json();
        return json;
    }catch(error){
        console.error("Hubo un error al obtener las categorias",error)
        return false;
    }
}