/**
 * GENERADORES
 */

// Un generador es una función que retorna un iterador
function *crearGenerador() { // las funciones generadores siempre lleva un * al inicio
    yield 1;
    yield 'Juan';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();
console.log(iterador);
console.log(iterador.next());
const {value, done} = iterador.next();
console.log(value, done);
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.return(1));

function *generadorCarrito(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ['prod1', 'prod2', 'prod3'];

const iterador2 = generadorCarrito(carrito);

console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());