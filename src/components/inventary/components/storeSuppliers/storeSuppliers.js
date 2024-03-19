import {URL} from "../../../tools/connections/url"
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



export const handleDelete = async(id)=>{
    try {
        const response = await fetch(`${URL}/storeSuppliers/${id}`, {
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


export let thead =[
    "Id","Cod pro","Cod. prov. 2","Producto","Proveedor", "Acción"
]

export const handleSubmit = async (e) => {
    let formData = new FormData(e.target);

    let object = {};
    for (let data of formData.entries()) {
        let [key, value] = data; // Desestructura la entrada en clave y valor
        object[key] = value;
    }

    
    return await updateStore(object);

}

export const convertObjectStoreSupplier = (storeSupplier) => {
    let keys = Object.keys(storeSupplier);
    let convertStore = {
        id: [storeSupplier.id, keys[0], "col-12 text-center","text"],
        Cod_prov: [storeSupplier.idSupplierOne, keys[1], "col-6 text-center","text"],
        Cod_prov2: [storeSupplier.idSupplierTwo, keys[2], "col-6 text-center","text"],
        Product: [JSON.stringify(storeSupplier.product), keys[3], "col-6 text-center d-none","text"],
        Proveedor: [JSON.stringify(storeSupplier.supplier), keys[4], "col-6 text-center d-none","text"], 
        Acción: ["Editar", "Cancelar", "btn btn-warning me-2", "btn btn-danger"],
    };
    return convertStore;
};




const updateStore = async (object) => {
    
    object.product = JSON.parse(object.product);
    object.supplier = JSON.parse(object.supplier);
    try {
        const response = await fetch(URL + "/storeSuppliers", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(object)

        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        console.log("Error al crear cliente");
    }


}
export const submitStoreSupplierCreate=(e)=>{
    
};
export let handleChange = async (text,methods) => {
        let object = [];
        let data = [];
        let page =0;
        data = await searchByText(
            { idSupplierOne: text },
            `${URL}/storeSuppliers/idSupplier?page=${page}&size=5`,
        );

        for (var i = 0; i < data.content.length; i++) {
            object.push({
                id: {
                    value: data.content[i].id,
                    name: data.content[i].id,
                    type: "text",
                    class: "col-2",
                },
                idSupplierOne: {
                    value: data.content[i].idSupplierOne,
                    name: data.content[i].idSupplierOne,
                    type: "text",
                    class: "col-2",
                },
                idSupplierTwo: {
                    value: data.content[i].idSupplierTwo,
                    name: data.content[i].idSupplierTwo,
                    type: "text",
                    class: "col-2",
                },
                product: {
                    value: data.content[i].product,
                    name: data.content[i].product.title,
                    type: "text",
                    class: "col-3",
                },
                supplier: {
                    value: data.content[i].supplier,
                    name: data.content[i].supplier.name,
                    type: "text",
                    class: "col-3",
                },
                accion: [
                    {
                        value: "Editar",
                        name: "send",
                        type: "button",
                        class: "btn btn-warning btn-sm me-2",
                        onclick: methods.handleClickClose,
                        delete: false
                    },
                    {
                        value: "Eliminar",
                        name: "delete",
                        type: "button",
                        class: "btn btn-danger btn-sm",
                        onclick:"",
                        delete:true
                    },
                ],
            });
        }
    
        return object;
    };

export let objectCreate =
{
    Cod_prov: ["idSupplierOne", "col-6 text-center","text"],
    Cod_prov2: ["idSupplierTwo", "col-6 text-center","text"],
    Proveedor: ["supplier", "col-6 text-center","text"],
    Producto: ["product", "col-6 text-center","text"],
    Acción: ["Crear", "Cancelar", "btn btn-info me-2", "btn btn-danger"],
};