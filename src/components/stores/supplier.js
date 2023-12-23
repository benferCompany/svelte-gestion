export const showSupplier = async (URL) => {
    try {
        const datos = await fetch(URL);
        const datosJson = await datos.json();
        return datosJson;
    } catch (error) {
        console.log( "Al parecer hubo un error de tipo: ",error)
    }

}