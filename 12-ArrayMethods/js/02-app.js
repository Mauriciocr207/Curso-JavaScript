const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

/**
 * Method: findIndex
 * 
 * Encontrar el índice de un valor en un arreglo
 */
// Ejemplo "manual o largo"
let indice = -1;
meses.forEach((mes, i) => {
    if(mes==='Abril') {
        indice = i;
    }
});
console.log(indice);
// Ejemplo usando 'findIndex'
const indice2 = meses.findIndex(mes => mes==='Abril');
console.log(indice2);

// Encontrar un índice de un arreglo de 
const indice3 = carrito.findIndex(producto => producto.precio <= 200);
console.log(indice3);

// Nota: 'findIndex' siempre retorna el primer valor
// que coincida con la expresión lógica

