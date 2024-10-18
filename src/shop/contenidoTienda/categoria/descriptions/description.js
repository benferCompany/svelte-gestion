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

export const addCarrito = (car, product, cantidad) => {
   
    let detailProductList = [

    ];

    let prd = {
        "id": product.id,
        "quality": cantidad,
        "productId": product.id,
        "internalCode": product.internalCode,
        "description": product.title,
        "price": product.selling_price,
        "costPrice": product.cost_price,
        "totalCostPrice": 0,
        "totalPrice": 0,
        "image": product.image,
        "stock": product.stores?product.stores[0]?.stock:1
    }
    car.push(prd)

    car.forEach((c) => {
        let existingProduct = detailProductList.find((p) => p.id === c.id);

        if (existingProduct) {
            // Si no existe quality, inicializar en 0
            existingProduct.quality = existingProduct.quality || 0;
           
            // Sumar la calidad del nuevo producto o sumar 1 si no tiene definida la calidad
           
            // Calcular precios totales
            existingProduct.totalPrice = existingProduct.quality * existingProduct.price;
            existingProduct.totalCostPrice = existingProduct.quality * existingProduct.costPrice;
        } else {
            // Si no existe el producto en la lista, agregarlo con valores iniciales
            c.quality = c.quality || 1; // Asegurarse que la calidad está definida
            c.totalPrice = c.quality * c.price;
            c.totalCostPrice = c.quality * c.costPrice;
            detailProductList.push(c);
            
        }
    });

    localStorage.setItem('carrito', JSON.stringify(detailProductList));
    carrito.set(detailProductList);


}



export const getImagesProduct=async(idProd)=>{
    const response = await fetch(`${URL}/imagesProduct/${idProd}`);
    const json = await response.json(); 
    return json;
}

export const descuento = {
    id:1,
    motivo: "Compra online",
    descuento: 10

}

export function aplicarDescuento(precioOriginal, porcentajeDescuento) {
    // Calcular el valor del descuento
    const descuento = (precioOriginal * porcentajeDescuento) / 100;
    
    // Calcular el precio con el descuento aplicado
    const precioConDescuento = precioOriginal - descuento;
    
    return precioConDescuento;
}

export let options = {
    cuotas:false,
    descuento:true,
    colores: false

}