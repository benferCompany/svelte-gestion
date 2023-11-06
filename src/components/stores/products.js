export const showProduct = async (URL) => {

    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export const searchProduct = async (URL, datos) => {
    try {
        const response = await fetch(URL, {
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
        const response = await fetch("http://localhost:8080/products", {
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
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        return data

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export async function deleteProduct(id) {
    try {
        const response = await fetch(`http://localhost:8080/products/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // La eliminación fue exitosa
            return { success: true };
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
