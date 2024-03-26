/**
 * MIXIN PATTERN
 */

class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}`);
    }
}

const cliente = new Persona('mauricio');
console.log(cliente);

// Añadri funcionesPersona a la clase de Persona
Object.assign(Persona.prototype, funcionesPersona);
cliente.mostrarInformacion()