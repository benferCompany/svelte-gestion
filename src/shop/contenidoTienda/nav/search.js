import { writable } from "svelte/store";
import {URL} from "../../../components/tools/connections/url"

let lcprds = sessionStorage.getItem("locationProducts")?sessionStorage.getItem("locationProducts"):{products:[], categories:[], desc:"", category:"", size:10};
export const locationProducts= writable(lcprds);
export const getProduct = async(e,page,size) =>{

    let description = {
        description: e.target.search.value
    }
    try{
        const response  = await fetch(`${URL}/products/name?page=${page}&size=${size}`,{
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

export const AndroidPhone = writable(false);

