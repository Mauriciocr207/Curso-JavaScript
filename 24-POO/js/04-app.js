class Cliente {
    #nombre;
    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInfo() {
        return `cliente: ${this.getNombre()}, saldo: ${this.saldo}`;
    }

    getNombre() {
        return `${this.#nombre}`;
    }

    static bienvenida() {
        return 'Bienvenido al cajero';
    }
}

const cliente = new Cliente('Mauricio', 400);
console.log(cliente.getNombre());
console.log(cliente.mostrarInfo());