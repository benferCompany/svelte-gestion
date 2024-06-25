export function getCurrentDate() {
    const ahora = new Date(); // Crea un objeto Date con la fecha y hora actual
    const dia = ("0" + ahora.getDate()).slice(-2); // Obtiene el día del mes y asegura que siempre tenga dos dígitos
    const mes = ("0" + (ahora.getMonth() + 1)).slice(-2); // Obtiene el mes (0-11, por eso se suma 1) y también asegura dos dígitos
    const año = ahora.getFullYear(); // Obtiene el año completo

    return `${dia}/${mes}/${año}`; // Formatea y retorna la fecha como DD/MM/YYYY
}