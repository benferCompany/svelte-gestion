import {URL} from "../tools/connections/url"
export const showProduct = async (url) => {

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export const searchProduct = async (url, datos) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
        });
        const data = await response.json();
        return await data
    } catch (error) {
        console.log(error)
        console.error("Error fetching data:", error);
    }
}


export const createProduct = async (dts) => {
    try {
        const response = await fetch(URL+"/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dts),
        });
        const data = await response.json();
        return await data;
    } catch (error) {
        console.log(error);
        console.error("Error fetching data:", error);
    }
};




export const showProductView = async () => {

    try {
        const response = await fetch(URL+"/products");
        const data = await response.json();
        return data

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export async function deleteProduct(id) {
    try {
        const response = await fetch(`${URL}/products/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // La eliminación fue exitosa
            return { ok: true };
        } else {
            // La eliminación falló, puedes manejar el error aquí
            return { success: false, error: 'No se pudo eliminar el producto.' };
        }
    } catch (error) {
        // Error en la solicitud
        return { success: false, error: 'Error de conexión.' };
    }
}


export const createOrUpdateProduct = async (url, method, data) => {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        
        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else {
            // Handle errors here, if needed
            console.error("Error fetching data:", response.statusText);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const lastElement = async()=>{
    try {
        const response = await fetch(`${URL}/products/lastElement`);
        const data = await response.json();
        return data

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}