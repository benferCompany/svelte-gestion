import {URL} from "../../../../../../tools/connections/url";


export const getImagesProduct = async(idProd)=>{
    try{
        const response = await fetch(`${URL}/imagesProduct/${idProd}`);
        const json = await response.json();
        return json;
    }catch(error){
        console.error("Hubo un error al intentar traer la imagenes de producto ", error);
    }
}