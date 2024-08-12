import { writable } from "svelte/store";
import { URL } from "../tools/connections/url"

export const showSalesPerson = async()=>{
    let response = await fetch(URL+"/salesPerson");
    let json = await response.json();

    return json();
}

const selectSalesPerson = writable({});