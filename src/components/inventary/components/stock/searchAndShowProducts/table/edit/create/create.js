import { URL } from "../../../../../../../tools/connections/url";
import { writable } from "svelte/store";
import { readable } from 'svelte/store';

export const handleCreate = async (e) => {
    let formData = new FormData(e.target)

    let object = {};
    for (let data of formData.entries()) {
        let [key, value] = data;
        object[key] = value;
    }

    let store =
    {
        "company": JSON.parse(object.company),
        "product": JSON.parse(object.product),
        "stock": object.stock,
        "stock_min": object.stock_min,
        "stock_max": object.stock_max,
        "last_modication": Date.now()
    }
    e.target.querySelector('[name="stock"]').value = '';
    e.target.querySelector('[name="stock_min"]').value = '';
    e.target.querySelector('[name="stock_max"]').value = '';
    return await sendStore(store);

}

const sendStore = async (object) => {
    try {
        let sendStore = await fetch(URL + "/stores", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(object)
        })
        let response = sendStore.json();
        return response;
    } catch (error) {
        console.error("Al parecer hubo un error al crear el stock", error)
        return false;
    }
}


export const validaData = (e, getData) => {
    let formData = new FormData(e.target)
    let object = {};
    let boolean = true;
    for (let data of formData.entries()) {
        let [key, value] = data;
        object[key] = value;
    }

    let company = JSON.parse(object.company)
    getData.stores?.forEach((st) => {
        if (st.company.id == company.id) {
            boolean = false
            
        }
    })

    return boolean
}

export const changeCompany = writable("");
export const readCompanies = readable(async (product) => {
    let fetchCompany = await fetch(URL + "/company");
    let companies = await fetchCompany.json()
    const storeIds = product.stores.map((store) => store.company.id);
    companies = companies.filter(
        (company) => !storeIds.includes(company.id),
    );
    return companies;

})
