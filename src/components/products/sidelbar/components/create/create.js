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
    let productDTO = {
        "title": object.title,
        "description": object.description,
        "cost_price": object.cost_price,
        "selling_price": object.selling_price,
        "idInternal": object.idInternal,
        "stores": [
            {
                "company": JSON.parse(object.company),
                "stock": object.stock,
                "stock_min": object.stockMax,
                "stock_max": object.stockMin,
                
            }
        ],
        "image": object.image,
        
        "storeSuppliers": [
            {
                
               
                "idSupplierOne": object.idSupplierOne,
                "idSupplierTwo": object.idSupplierTwo,
                "supplier": JSON.parse(object.supplier),
                
                
            }
        ]
    }
    
    const createResponse = await createProduct(productDTO);

   
};