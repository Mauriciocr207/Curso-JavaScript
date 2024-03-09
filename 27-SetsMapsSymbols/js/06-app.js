/**
 * ITERADORES
 */

// creemos nuestro propio iterador
function crearIterador(carrito) {
    let i = 0;
    return {
        siguiente: () => {
            const fin = (i === carrito.length);
            const valor = !fin ? carrito[i++]:undefined;
            return {fin, valor};
        }
    }
}

const carrito = ['producto 1', 'producto 2', 'producto 3'];

const recorrerCarrito = crearIterador(carrito);
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());