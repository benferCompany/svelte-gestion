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

export const getParentCategories = async()=>{
    try{
        const response = await fetch(`${URL}/categories/parentCategory`)
        const json = await response.json();
        return json;
    }catch(error){
        console.error("Hubo un error al intentar obtener categorias padres",error);
        return false;
    }
}

export const getChildCategories = async (name)=>{
    try{
        const response = await fetch(`${URL}/categories/${name}`);
        const json = await response.json();
        return json;
    }catch(error){
        console.error("Hubo un error al intentar obtener categorias hijos",error);
        return false;
    }
}