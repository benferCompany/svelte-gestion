import { URL } from "../../../../../../tools/connections/url";


export const getImagesProduct = async (idProd) => {
    try {
        const response = await fetch(`${URL}/imagesProduct/${idProd}`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Hubo un error al intentar traer la imagenes de producto ", error);
    }
}

export const updateImages = async (imagesProduct) => {
    try {
        const response = await fetch(`${URL}/imagesProduct`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(imagesProduct)
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Hubo un problema al intentar actualizar las images del producto", error);
        return false;
    }
}