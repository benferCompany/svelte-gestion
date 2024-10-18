import {URL} from "../../../components/tools/connections/url";
export const getCategoriesProducts = (data) => {
    const uniqueCategories = new Set();
    // Iterar sobre los productos y extraer categorías
    data.content.forEach(product => {
        product.categories.forEach(category => {
            uniqueCategories.add(category.name); // Agregar la categoría al Set (evita duplicados)
        });
    });

    // Convertir el Set a un array (opcional, dependiendo de lo que necesites)
    const uniqueCategoriesArray = Array.from(uniqueCategories);

    return uniqueCategoriesArray;
}

export const filterProductsByCategory = async (ct) => {
    try {
        const response = await fetch(
            `${URL}/products/category/e?page=0&size=1&category=${ct ? ct : ""}`,
        );
        const json = await response.json();
        prds = json;
        return json;
    } catch (error) {
        console.error(
            "Hubo un error al intentar buscar productos por categoría",
        );
        return false;
    }
};
