import { writable } from "svelte/store";
import {URL} from "../components/tools/connections/url";
export const salesPerson = async () => {
    let urlPerson = URL+"/salePerson/1";
    try {
        let fetchSalesPerson = await fetch(urlPerson);
        return await fetchSalesPerson.json();
    } catch (e) {
        console.error(e);
    }
};

export const globalSalePerson = writable({});