/**
 * FACTORY
 */

class InputHtml {
    constructor(type, nombre) {
        this.type = type;
        this.nombre = nombre;
    }

    createInput() {
        return `<input type="${this.type}" name="${this.nombre} id="${this.nombre}"">`
    }
}

class HtmlFactory {
    crearElemento(type, nombre) {
        switch(type) {
            case 'text':
                return new InputHtml('text', nombre);
            case 'tel':
                return new InputHtml('tel', nombre);
            case 'email':
                return new InputHtml('email', nombre);
            default:
                return;
        }
    }
}

const element = new HtmlFactory();
const inputText = element.crearElemento('text', 'nombreCliente');
console.log(inputText);
console.log(inputText.createInput());

const element2 = new HtmlFactory();
const inputText2 = element.crearElemento('tel', 'telCliente');
console.log(inputText2);
console.log(inputText2.createInput());

const element3 = new HtmlFactory();
const inputText3 = element.crearElemento('email', 'emailCliente');
console.log(inputText3);
console.log(inputText3.createInput());