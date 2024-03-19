import {URL} from "../../../tools/connections/url";
export const objectCreate =
{
    Nombre: ["name", "col-12 text-center","text"],
    Dirección: ["address", "col-12 text-center","text"],
    Empresa: ["business_name", "col-6 text-center","text"],
    Cuit: ["cuit", "col-6 text-center","text"],
    Fecha:["business_activity","col-12","date"],
    Acción: ["Crear", "Cancelar", "btn btn-info me-2", "btn btn-danger"],
};


export const submitStoreCreate= async(e)=>{
    let formData = new FormData(e.target);
    
    let object = {};
    for (let data of formData.entries()) {
        let [key, value] = data; // Desestructura la entrada en clave y valor
        object[key] = value;
    }
    let ba = object.business_activity.split("-");
    object.business_activity = `${ba[2]}/${ba[1]}/${ba[0]}`
    createStore(object);
}

const createStore=async(store)=>{
    let send =await  fetch(URL+"/company",{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(store)
    })
    let response = await send.json();
    

}