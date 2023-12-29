import { URL } from "../../tools/connections/url";

const mappedProduct = async (products) => {
    let company;
    let supplier;

    let getCompany = async () => {
        let fetchCompany = await fetch(URL+"/company/1");
        return await fetchCompany.json();
    }

    let getSupplier = async()=>{
        let fetchSupplier = await fetch(URL+"/supplier/1");
        return await fetchSupplier.json();
    }

    // Usar await para esperar a que se complete la solicitud antes de continuar
    company = await getCompany();
    supplier = await getSupplier();
    
    console.log(company);

    let productDTOs = [];
    for (const object of products) {
        productDTOs.push({
            "title": object.title,
            "description": object.description,
            "cost_price": object.cost_price,
            "selling_price": object.selling_price,
            "stores": [
                {
                    "company": company,
                    "stock": object.stock,
                    "stock_min": object.stockMax,
                    "stock_max": object.stockMin,
                }
            ],
            "image": object.image,
            "storeSuppliers": [
                {
                    "idInternal": object.idInternal,
                    "idSupplierOne": object.idSupplierOne,
                    "idSupplierTwo": object.idSupplierTwo,
                    "supplier" : supplier
                }
            ]
        })
    }

   return productDTOs;
}

export default mappedProduct;
