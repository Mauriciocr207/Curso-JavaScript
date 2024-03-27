const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

/**
 * Method: every
 * 
 * Retorna true si todos los elementos de un
 * arreglo cumplen con la expresión lógica
 */
const res = carrito.every(producto => producto.precio);
const res2 = carrito.every(producto => producto.precio < 1000);
console.log(res);
console.log(res2);