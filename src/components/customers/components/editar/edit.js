import {URL} from "../../../tools/connections/url";
export const handleSubmit =async (e)=>{
    let formData = new FormData(e.target);
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dateFormat = `${day}/${month}/${year}`;
    formData.set("creation_date", dateFormat);
    let object = {};
    for (let data of formData.entries()) {
        let [key, value] = data; // Desestructura la entrada en clave y valor
        object[key] = value;
    }
    return editCustomer(object);
}

export const editCustomer=async (customer)=>{
    try {
        const response = await fetch(URL+"/customer",{
            method:"PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(customer)

        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        console.log("Error al crear cliente");
    }
}