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


export function getCurrentDateInput() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function formatDate(date) {
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };
    return new Date(date).toLocaleString('en-GB', options).replace(',', '');
}

export function parseDate(dateString) {
    const [date, time] = dateString.split(' ');
    const [day, month, year] = date.split('/');
    return `${year}-${month}-${day}T${time}`;
}
