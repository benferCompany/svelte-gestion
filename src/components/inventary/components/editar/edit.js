import { URL } from "../../../tools/connections/url";

const dateNow = () => {
    let currentDate = new Date().toLocaleDateString("en-CA", { timeZone: "America/Argentina/Buenos_Aires" });

    return currentDate;
}
export const convertObject = (store) => {
    let keys = Object.keys(store);
    let convertStore = {
        id: [store.id, keys[0], "col-3 text-center", "text"],
        Nombre: [store.name, keys[1], "col-9 text-center", "text"],
        Empresa: [store.business_name, keys[2], "col-6 text-center", "text"],
        Cuit: [store.cuit, keys[3], "col-6 text-center", "text"],
        Dirección: [store.address, keys[4], "col-8 text-center", "text"],
        Fecha: [dateNow(), keys[5], "col-4 text-center", "date"],
        Acción: ["Editar", "Cancelar", "btn btn-warning me-2", "btn btn-danger"],
    };
    return convertStore;
};

export const handleSubmit = async (e) => {
    let formData = new FormData(e.target);

    let object = {};
    for (let data of formData.entries()) {
        let [key, value] = data; // Desestructura la entrada en clave y valor
        object[key] = value;
    }
    let ba = object.business_activity.split("-");
    object.business_activity = `${ba[2]}/${ba[1]}/${ba[0]}`
    return await updateStore(object);

}

export const convertObjectStoreSupplier = (storeSupplier) => {
    let keys = Object.keys(storeSupplier);
    let convertStore = {
        id: [storeSupplier.id, keys[0], "col-3 text-center", "text"],
        idSupplierOne: [storeSupplier.idSupplierOne, keys[0], "col-3 text-center", "text"],
        idSupplierTwo: [storeSupplier.idSupplierTwo, keys[0], "col-3 text-center", "text"],
        Acción: ["Editar", "Cancelar", "btn btn-warning me-2", "btn btn-danger"],
    };
    return convertStore;
};




const updateStore = async (object) => {

    try {
        const response = await fetch(URL + "/company", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(object)

        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        console.log("Error al crear cliente");
    }


}
