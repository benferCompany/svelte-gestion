

export const formatDateMercadoPago = (dateString) => {
    let date = new Date(dateString);

    let formattedDate = date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });

    let formattedTime = date.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    let formattedDateTime = `${formattedDate} ${formattedTime}`;
    return formattedDateTime;

}