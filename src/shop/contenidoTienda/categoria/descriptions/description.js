import { URL } from "../../../../components/tools/connections/url"
import { carrito } from "../../carrito/carrito"
export const getProduct = async (id) => {
    try {
        let response = await fetch(`${URL}/products/${id}`)
        let json = await response.json();
        return json;
    } catch (error) {
        console.error("Ocurrio un error inesperado", error)
    }
}

export const addCarrito = (car, product) => {


    let detailProductList = [

    ];

    let prd = {
        "id": product.id,
        "quality": null,
        "productId": product.id,
        "internalCode": product.internalCode,
        "description": product.title,
        "price": product.selling_price,
        "costPrice": product.cost_price,
        "totalCostPrice": 0,
        "totalPrice": 0,
        "image": product.image
    }

    car.push(prd)
    
    car.forEach((c) => {
        let existingProduct = detailProductList.find((p) => p.id === c.id);

        if (existingProduct) {
            existingProduct.quality = existingProduct.quality?existingProduct.quality:0;
            console.log(existingProduct)
            existingProduct.quality += c.quality?c.quality:1;
            existingProduct.totalPrice = existingProduct.quality * existingProduct.price;
            existingProduct.totalCostPrice = existingProduct.quality * existingProduct.costPrice;
        } else {
    
            detailProductList.push({
                ...c, // Copia las propiedades del objeto del carrito
                totalPrice: c.quality * c.price,
                totalCostPrice: c.quality * c.costPrice,
            });
        }
    });

    localStorage.setItem('carrito',JSON.stringify(detailProductList));
    carrito.set(detailProductList);

}


