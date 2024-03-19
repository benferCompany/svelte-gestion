import { URL } from "../../../tools/connections/url";
export const getStores = async () => {
    let fetchStore = await fetch(URL + "/company")
    let stores = await fetchStore.json();
    return stores;
}

export const searchByText = async (text, url) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(text),
        });
        return await response.json();

    } catch (error) {
        console.log(error);
        console.error("Error fetching data:", error);
    }
}

export let thead = [
    "id",
    "Stock Min",
    "Stock",
    "Stock Max",
    "Id Interno",
    "Titulo",
    "Acción",
];

export const handleDelete = async(id)=>{
    try {
        const response = await fetch(`${URL}/company/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // La eliminación fue exitosa
            return { ok: true };
        } else {
            // La eliminación falló, puedes manejar el error aquí
            return { success: false, error: 'No se pudo eliminar la compañia.' };
        }
    } catch (error) {
        // Error en la solicitud
        return { success: false, error: 'Error de conexión.' };
    }
}



export let handleChange =  async (text,methods) => {
    let object =[]
    let data=[];
    let page =0;
    await new Promise(resolve => setTimeout(resolve, 300));
   
    data = await searchByText(
        { description: text },
        `${URL}/products/name?page=${page}&size=5`,
    );
    
    /*for (var i = 0; i < data.content.length; i++) {
        object.push({
            id: {
                value: data.content[i].id,
                name: data.content[i].id,
                type: "text",
                class: "col-2",
            },
            name: {
                value: data.content[i].name,
                name: data.content[i].name,
                type: "text",
                class: "col-2",
            },
            business_name: {
                value: data.content[i].business_name,
                name: data.content[i].business_name,
                type: "text",
                class: "col-2",
            },
            cuit: {
                value: data.content[i].cuit,
                name: data.content[i].cuit,
                type: "text",
                class: "col-3",
            },
            address: {
                value: data.content[i].address,
                name: data.content[i].address,
                type: "text",
                class: "col-3",
            },
            business_activity: {
                value: data.content[i].business_activity,
                name: data.content[i].business_activity,
                type: "date",
                class: "col-3",
            },
            accion: [
                {
                    value: "Editar",
                    name: "send",
                    type: "button",
                    class: "btn btn-warning btn-sm me-2",
                    onclick: methods.handleClickClose,
                    delete: false,
                },
                {
                    value: "Eliminar",
                    name: "delete",
                    type: "button",
                    class: "btn btn-danger btn-sm",
                    onclick: "",
                    delete: true,
                },
            ],
        });
    }
*/
    return data;
};