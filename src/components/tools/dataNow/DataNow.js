export function getCurrentDate() {
    // Crea un objeto Date con la fecha y hora actual en UTC
    const ahoraUTC = new Date();

    // Convierte la hora UTC a la hora de Argentina (UTC-3)
    const ahora = new Date(ahoraUTC.toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" }));

    const dia = ("0" + ahora.getDate()).slice(-2); // Obtiene el día del mes y asegura que siempre tenga dos dígitos
    const mes = ("0" + (ahora.getMonth() + 1)).slice(-2); // Obtiene el mes (0-11, por eso se suma 1) y también asegura dos dígitos
    const año = ahora.getFullYear(); // Obtiene el año completo

    const horas = ("0" + ahora.getHours()).slice(-2); // Obtiene las horas y asegura que siempre tenga dos dígitos
    const minutos = ("0" + ahora.getMinutes()).slice(-2); // Obtiene los minutos y asegura que siempre tenga dos dígitos
    const segundos = ("0" + ahora.getSeconds()).slice(-2); // Obtiene los segundos y asegura que siempre tenga dos dígitos

    return `${dia}/${mes}/${año} ${horas}:${minutos}:${segundos}`; // Formatea y retorna la fecha y hora como DD/MM/YYYY HH:MM:SS
}