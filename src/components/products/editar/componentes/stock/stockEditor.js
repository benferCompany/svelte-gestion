import { readable,writable } from "svelte/store";
import {URL} from "../../../../tools/connections/url";
export const readCompanies = readable(async (product) => {
    let fetchCompany = await fetch(URL + "/company");
    let companies = await fetchCompany.json()
    const storeIds = product.stores.map((store) => store.company.id);
    companies = companies.filter(
        (company) => !storeIds.includes(company.id),
    );
    return companies;

})

export const changeCompany = writable("");