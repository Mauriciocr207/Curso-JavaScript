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

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
    static bienvenida() {
        return 'Bienvenido al cajero de empresas';
    }
}

const cliente = new Cliente('Mauricio', 200);
const empresa = new Empresa('Pepsi', 200000);

console.log(Empresa.bienvenida());
console.log(empresa);