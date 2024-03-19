import { URL } from "../../../../../../tools/connections/url";
export const handleEdit = async (e) => {
    let formData = new FormData(e.target)

    let object = {};
    for (let data of formData.entries()) {
        let [key, value] = data;
        object[key] = value;
    }

    let store =
    {
        "id": object.stock ? object.id : 0,
        "company": JSON.parse(object.company),
        "product": JSON.parse(object.product),
        "stock": object.stock,
        "stock_min": object.stock_min,
        "stock_max": object.stock_max,
        "last_modication": Date.now()
    }
    return await sendStore(store);

}

export const validaData = (e, getData) => {
    let formData = new FormData(e.target)
    let object = {};
    for (let data of formData.entries()) {
        let [key, value] = data;
        object[key] = value;
    }
    let stockBoolean = getData.stock != object.stock;
    let stockMinBoolean = getData.stock_min != object.stock_min;
    let stockMaxBoolean = getData.stock_max != object.stock_max
    return stockBoolean || stockMinBoolean || stockMaxBoolean;

}

const sendStore = async (object) => {
    try {
        let sendStore = await fetch(URL + "/stores", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(object)
        })
        let response = sendStore.json();
        return response;
    } catch (error) {
        console.log("Al parecer hubo un error al actualizar el stock")
        console.log(error)
    }
}

export const deleteObject = async (id) => {
    try {
        return await fetch(URL + "/stores/" + id, {
            method: "DELETE"
        })
       
        
    } catch (error) {
        console.log("Al parecer hubo un error")
        console.log(error);
    }
}