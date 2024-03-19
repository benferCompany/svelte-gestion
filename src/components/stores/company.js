import { readable, writable } from "svelte/store";
import {URL} from "./../tools/connections/url";
export const showCompany = async (URL) => {

    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export const readCompanies = readable(async () => {
    let fetchCompany = await fetch(URL + "/company");
    let companies = await fetchCompany.json()
    
    return companies;

})

export function filterStock(stores, searchTerm) {
    return stores.filter((item) => {
        return item.company.name.includes(searchTerm);
    });
}

export const selectCompany = writable({});