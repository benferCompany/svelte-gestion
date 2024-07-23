import { URL } from "../../../tools/connections/url"
export const postDetails = async (data) => {

    let detailProductList = [];
    for (let i = 0; i < data.Productos.length; i++) {
        let element = data.Productos[i];
        let detailsProduct =
        {
            
            "product": {
                "id": element.id,
            },
            "quality": element.count,
            "total": element.subTotal
        }
        
        detailProductList.push(detailsProduct)
    }
    
    let object = {
        "salesPerson": data.Cliente,
        "customer": data.Vendedor,
        detailProductList,
        "total": data.total,
        "fiscalStatus": data.TipoFiscal,
        "paymentType": data.TipoDePago
    }

    let fetchDetails = fetch(`${URL}/details`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object)
    })
    return await fetchDetails;
}