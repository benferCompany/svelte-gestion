import { URL } from "../../../components/tools/connections/url";

export const getProductByCategories = async(category)=>{
    try{
        const response =await fetch(`${URL}/products/category/${category}`)
        const json = await response.json();
        return json;
    }catch(error){
        console.error("Hubo un error al obtener productos por categoría",error);
        return false;
    }
}