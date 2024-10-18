export function aplicarDescuento(precioOriginal, porcentajeDescuento) {
    // Calcular el valor del descuento
    const descuento = (precioOriginal * porcentajeDescuento) / 100;
    
    // Calcular el precio con el descuento aplicado
    const precioConDescuento = precioOriginal - descuento;
    
    return precioConDescuento;
}


export function generarWhatsAppLink(phoneNumber, message) {
    const mensajeCodificado = message.split(' ').join('%20');
    return `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${mensajeCodificado}&type=phone_number&app_absent=0`;
}