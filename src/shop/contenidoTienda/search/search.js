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


export function filterProductsByCategory(data, selectedCategory) {
    let filteredProducts
    if (selectedCategory) {
      filteredProducts = data.content.filter(product => 
        product.categories.some(category => category.name === selectedCategory)
      );
    } else {
      filteredProducts = data.content; // Si no se selecciona una categoría, mostrar todos los productos
    }
    return filteredProducts
  }