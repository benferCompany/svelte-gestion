import { createOrUpdateProduct } from "../../stores/products"

let url = "http://localhost:8080/products"


export const handleEdit = async (e, image) => {
    let formData = new FormData(e.target);
    formData.set("image", image);
    let object = {};
    for (let data of formData.entries()) {
        let [key, value] = data; // Desestructura la entrada en clave y valor
        object[key] = value;
    }
    console.log(object)
    const editResponse = await createOrUpdateProduct(url,"PUT",object);
    return editResponse;
   
};