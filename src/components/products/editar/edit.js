import { createOrUpdateProduct } from "../../stores/products"
import {URL} from "../../tools/connections/url"
let url = URL+"/products"


export const handleEdit = async (e, image) => {
    let formData = new FormData(e.target);
    formData.set("image", image);
    let object = {};
    for (let data of formData.entries()) {
        let [key, value] = data; // Desestructura la entrada en clave y valor
        object[key] = value;
    }
    let productDTO = {
        "id": object.id,
        "title": object.title,
        "description": object.description,
        "cost_price": object.cost_price,
        "selling_price": object.selling_price,
        "idInternal": object.idInternal,
        "stores":object.stock && object.company!=""? [
            {
                "id": object.stock ? object.storeId : 0,
                "company": JSON.parse(object.company),
                "product": JSON.parse(object.product),
                "stock": object.stock,
                "stock_min": object.stockMin,
                "stock_max": object.stockMax,
                "last_modication": null
            }
        ]:[],
        "image": object.image,
        "storeSuppliers": [
            {
                "id": object.storeSupplierId ? object.storeSupplierId : 0,
                "idSupplierOne": object.idSupplierOne,
                "idSupplierTwo": object.idSupplierTwo,
                "supplier": JSON.parse(object.supplier),
                "product": JSON.parse(object.storeSupplier).product
               
                   

            }
        ]
    }
    const editResponse = await createOrUpdateProduct(url, "PUT", productDTO);
    return editResponse;

};