import { writable } from "svelte/store";
import { URL } from "../../tools/connections/url"
export const getCategories = async () => {
    try {
        const response = await fetch(`${URL}/categories`);
        const json = await response.json();
        return json;

    } catch (error) {

        console.error("Hubo un error al importar las categorias desde la base de datos", error)
        return false;
    }
}


export const createCategory = async (e, parentCategory) => {
    let parentBoolean = parentCategory === "" || !parentCategory
    let category = {
        name: e.target.name.value,
        parentCategory: parentBoolean ? null : parentCategory

    }
    try {
        const response = await fetch(`${URL}/categories`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(category)
        })
        const json = response.json();
        return json
    } catch (error) {
        console.error("Hubo un error al intentar crear categoría", error)
        return false;
    }
}


export const deleteCategory = async (category) => {
    try {
        const response = await fetch(`${URL}/categories/delete`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(category)
        });
        const json = await response.json();
        if (json.status) {
            return json;
        }
        console.error("Error inesperado", json);
        return false;

    } catch (error) {
        console.error("Hubo un problema al intentar eliminar la categoría")
        return false;
    }
}


export const editCategory = async (e, parentCategory) => {
    let parentBoolean = parentCategory === "" || !parentCategory
    let category = {
        name: e.target.name.value,
        parentCategory: parentBoolean ? null : parentCategory

    }
    try {
        const response = await fetch(`${URL}/categories`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(category)
        })
        const json = await response.json();
        if (json.status) {
            return json;
        }
        console.error("Error inesperado", json);
        return false;

    } catch (error) {
        console.error("Hubo un error al intentar crear categoría", error)
        return false;
    }
}

export const categories = writable([]);