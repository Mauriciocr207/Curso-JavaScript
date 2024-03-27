// Class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInfo() {
        return `cliente: ${this.nombre}, saldo: ${this.saldo}`;
    }

    static bienvenida() {
        return 'Bienvenido al cajero';
    }
}

const mau = new Cliente('Mauricio', 400);
console.log(mau);
console.log(mau.mostrarInfo());
console.log(Cliente.bienvenida());

// Class expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInfo() {
        return `cliente: ${this.nombre}, saldo: ${this.saldo}`;
    }
}

const mau2 = new Cliente2('Mauricio', 300);
console.log(mau2.mostrarInfo());