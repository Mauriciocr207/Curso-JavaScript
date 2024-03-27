const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

/**
 * Method: reduce
 * 
 * Realizar una suma de los precios de los productos
 * en el carrito
 */
// Ejemplo "manual"
let total = 0;
carrito.forEach(producto => total+= producto.precio);
console.log(total);
// Ejemplo con 'reduce'
const initalValue = 0;
let sumWithInitial = carrito.reduce(
    (accumulator, producto) => accumulator + producto.precio, 
    initalValue,
);
console.log(sumWithInitial);