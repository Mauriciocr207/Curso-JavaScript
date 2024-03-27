/**
 * CLASS PATTERN
 */

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Juan', 'correo@corre.com');


console.log(persona);