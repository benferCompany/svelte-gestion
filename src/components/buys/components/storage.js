export const tdsStore = () => {
    let tds = JSON.parse(sessionStorage.getItem("supplierProductStore"));

    return {
        getData: () => tds,

        handleClick: (item) => {
            if (tds) {
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
                            product: item.product,
                            count: item.count,
                            pvp: item.pvp,
                            discount: item.discount,
                            subTotal: item.subTotal,
                            delete: "&#128465;",
                        },
                    ];
                }
            }

        },
    };
};
