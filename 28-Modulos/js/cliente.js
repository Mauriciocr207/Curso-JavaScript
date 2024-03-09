export const nombreCliente = 'Mau';
export const ahorro = 200;

export function mostrarInfo(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if(ahorro > 0) {
        console.log('Si tiene saldo');
    } else {
        console.log('No tiene saldo');
    }
}

class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
}

function sayHi() {
    console.log('Hello!!');
}
export {Cliente, sayHi};

export default function() {
    console.log('export default');
}