const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//-- Encontrar un elemento del arreglo --//

// Con foreach
let res = '';
for (const producto of carrito) {
    if(producto.nombre === 'Tablet') {
        res = producto;
        break;
    }
}
console.log(res);

/**
 * Method: find
 * 
 * Encontrar un elemento dentro de un arreglo
 */
const res2 = carrito.find(producto => producto.precio === 100);
console.log(res2);
// Nota: 'find' retorna el primer elemento que coincida
// con la expresión lógica

  
