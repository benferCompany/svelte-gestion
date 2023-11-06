import { createProduct } from "../../../../stores/products";

export const handleCreate = async (e, image) => {
    let formData = new FormData(e.target);
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dateFormat = `${day}/${month}/${year}`;
    formData.set("creation_date", dateFormat);
    formData.set("image", image);
    let object = {};
    for (let data of formData.entries()) {
        let [key, value] = data; // Desestructura la entrada en clave y valor
        object[key] = value;
    }
    const createResponse = await createProduct(object);

   
};