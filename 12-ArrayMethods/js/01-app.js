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
 * Method: includes
 * 
 * Comprobar si un valor existe en un arreglo
 */
const res = meses.includes('Enero');
console.log(res); 

/**
 * Method: some
 * 
 * Para un arreglo de objetos se usa 'some' para
 * comprobar que un valor exista en un arreglo
 */
const existe = carrito.some( producto => producto.nombre === "Televisión");
console.log(existe);

// Usando some con un arreglo clásico
const existe2 = meses.some(mes => mes === 'Febrero');
console.log(existe2); // 'some' soporta cualquier arreglo, mientras 'includes' solo un arreglo común