// Clase Builder que define los métodos para construir el objeto
export class InputBuilder {
    constructor() {
        this.value = null;
        this.cls = null;
        this.style = null;
        this.name = null;
        this.type = null;
    }

    setValue(value) {
        this.value = value;
        return this; // Retorna el builder para encadenar métodos
    }

    setClass(cls) {
        this.cls = cls;
        return this;
    }

    setStyle(style) {
        this.style = style;
        return this;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setType(type) {
        this.type = type;
        return this;
    }

    build() {
        return {
            "class":this.cls,
            "name":this.name,
            "style":this.style,
            "type":this.type,
            "value":this.value

        }; // Retorna el objeto final
    }
}


