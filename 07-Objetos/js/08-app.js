"use strict";
const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,
}
Object.freeze(producto);

const producto2 = Object.freeze({
    nombre: "producto 2",
    precio: 300,
    disponible: true,
});
// producto2.disponible = false;


// producto.imagen = "imagen.jpg";
// producto.disponible = false;


console.log(producto);
console.log(producto2);
console.log(Object.isFrozen(producto));