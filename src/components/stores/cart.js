import { writable } from "svelte/store";

// Crea una variable reactiva global para los items del carrito
const store = () => {
    const { subscribe, update, set } = writable([]);
    set(JSON.parse(sessionStorage.getItem("tdsStore")) || []);
    return {
        subscribe,
        handleClickRemove: () => {
            set([])
        },
        handleClick: (item) => {
            update((tds) => {
                const existingIndex = tds.findIndex((td) => td.id === item.id);

                if (existingIndex !== -1) {
                    // Si ya existe, actualiza la cantidad en el lugar
                    tds[existingIndex].count += item.count;
                } else {
                    // Si no existe, agrega un nuevo objeto al array tds
                    tds = [
                        ...tds,
                        {
                            id: item.id,
                            stock: item.stock,
                            stock_min: item.stock_min,
                            stock_max: item.stock_max,
                            stock_id: item.stock_id,
                            product: item.product,
                            costo: item.costo,
                            count: item.count,
                            pvp: item.pvp,
                            discount: item.discount,
                            subTotal: item.subTotal,
                            subCostTotal: item.costo,
                            delete: "&#128465;",
                        },
                    ];
                }
                return tds
            });
        },
        
        set
    }
}

export const tdsStore = store();



const pay = () => {
    const { subscribe, update, set } = writable(false);
    return {
        subscribe,
        handleClickPay: (items) => {
            if (items.length > 0) {
                update(payBoolean => !payBoolean)
            }
        },
        set
    }
}

export const payStore = pay();

export const total = writable(0)
export const costTotal = writable(0)


