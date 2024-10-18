export const selected = (e, elements) => {
    if (elements) {
        const inputs = e.currentTarget.children[1].children[0].children[1].childNodes;
        const currentIndex = getCurrentIndex(inputs);
        const lastIndex = inputs.length - 1;

        resetSelection(inputs);

        if (e.key === "ArrowDown") {
            setSelection(inputs, (currentIndex + 1) % inputs.length, elements);
        } else if (e.key === "ArrowUp") {
            // Utilizamos el operador ternario para manejar el borde superior
            const newIndex = currentIndex - 1 < 0 ? lastIndex : currentIndex - 1;
            setSelection(inputs, newIndex, elements);
        }
    }
};

// Función para obtener el índice actual
const getCurrentIndex = (inputs) => {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].tagName === "TR" && inputs[i].getAttribute("class") === "table-dark") {
            return i;
        }
    }
    return -1;
};

// Función para restablecer la selección
const resetSelection = (inputs) => {
    for (const element of inputs) {
        if (element.tagName === "TR") {
            element.setAttribute("class", "");
        }
    }
};

// Función para establecer la selección
const setSelection = (inputs, index, elements) => {
    if (inputs[index].tagName =="TR") {
        inputs[index].setAttribute("class", "table-dark");
        selectedItem(inputs[index], elements);
    }
};


const selectedItem = (e, index, elements) => {
    if (e.key == "Enter") {
        console.log("Falta codigo:",elements[index])
    }
}