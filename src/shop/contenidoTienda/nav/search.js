import { writable } from "svelte/store";
import {URL} from "../../../components/tools/connections/url"
let prds = sessionStorage.getItem("products")?sessionStorage.getItem("products"):[];
export const products = writable(prds);

export const getProduct = async(e) =>{
    console.log(e.target.search.value)
    let description = {
        description: e.target.search.value
    }
    try{
        const response  = await fetch(`${URL}/products/name`,{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(description)
        })
        const json = await response.json();
        return json;
    }catch(error){
        console.error("Error inesperado en la busqueda de productos",error)
    }
}