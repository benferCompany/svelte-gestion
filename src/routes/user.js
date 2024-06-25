import { writable } from "svelte/store";

export const salesPerson = async () => {
    let urlPerson = "http://localhost:8080/salePerson/1";
    try {
        let fetchSalesPerson = await fetch(urlPerson);
        return await fetchSalesPerson.json();
    } catch (e) {
        console.error(e);
    }
};

export const globalSalePerson = writable({});