import {URL} from "../../../tools/connections/url";
export const getStores=async()=>{
    let fetchStore = await fetch(URL+"/company")
    let stores = await fetchStore.json();
    return stores;
}

export const searchByText = async(text, url)=>{
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(text),
        });
        return await response.json();
        
    } catch (error) {
        console.log(error);
        console.error("Error fetching data:", error);
    }
} 


export const convertObject = (store) => {
    let keys = Object.keys(store);
    console.log(keys);
    let convertStore = {
        id: [store.id, keys[0], "col-3 text-center"],
        Nombre: [store.name, keys[1], "col-9 text-center"],
        Empresa: [store.business_name, keys[2], "col-6 text-center"],
        Cuit: [store.cuit, keys[3], "col-6 text-center"],
        Dirección: [store.address, keys[4], "col-8 text-center"],
        Fecha: [store.business_activity, keys[5], "col-4 text-center"],
        Acción: ["Editar","Cancelar","btn btn-warning me-2","btn btn-danger"],
    };
    return convertStore;
};


export const handleSubmit =async(e)=>{
    let formData = new FormData(e.target);

    formData.set("business_activity", getDate());
    let object = {};
    for (let data of formData.entries()) {
        let [key, value] = data; // Desestructura la entrada en clave y valor
        object[key] = value;
    }
    
    let response = await  updateStore(object);
    console.log(response)
    return response;
    
}


const getDate=()=>{
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dateFormat = `${day}/${month}/${year}`;
    return dateFormat;   
}

export const updateStore=async (object)=>{
    
        try {
            const response = await fetch(URL+"/company",{
                method:"PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(object)
    
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            console.log("Error al crear cliente");
        }    
  
    
}
