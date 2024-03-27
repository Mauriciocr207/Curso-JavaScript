// constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// métodos

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 1000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo ='Normal';
    }

   return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo: ${this.tipoCliente()}`;
}

Cliente.prototype.retirarSaldo = function(retira) {
    this.saldo -= retira;
}


/**
 * Herencia
 */
function Persona(nombre, saldo, tel) {
    // Heredar propiedades
    Cliente.call(this, nombre, saldo);
    this.tel = tel;
}

// Heredar métodos
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;


const newPersona = new Persona('Mauricio', 1000, 2131321);
console.log(newPersona);
console.log(newPersona.tipoCliente());

Persona.prototype.mostrarTelefono = function() {
    return `El telefono es ${this.tel}`;
}

console.log(newPersona.mostrarTelefono());