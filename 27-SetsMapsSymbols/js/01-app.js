/**
 * SETS
 */
const carrito = new Set([1,1,2,3]);

carrito.add(2);
carrito.add('hola');
carrito.add('hola');
carrito.add('Hola');


console.log(carrito);
console.log(carrito.size);
console.log(carrito.has(2))
console.log(carrito.delete(2));
console.log(carrito);

carrito.forEach((i, prod, setOriginal) => console.log(i, prod, setOriginal)); 
/**
 * la llave y el valor en un set son la misma cosa
 */

/**
 * Problema: obtener los elementos no duplicados de un arreglo
 */
const duplicados = [2,3,1,5,5,1,1,1,2,2,2];

// solución: crear un set con ese arreglo
const noDuplicados = new Set(duplicados);
console.log(noDuplicados);