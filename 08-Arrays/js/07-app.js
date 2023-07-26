const carrito = [];

// definir producto
const producto = {
    nombre: "Monitor",
    precio: 400,
}
const producto2 = {
    nombre: "Celular",
    precio: 800,
}

carrito.push(producto);
carrito.push(producto2);


const producto3 = {
    nombre: "teclado",
    precio: 300,
}

carrito.unshift(producto3);

console.log(carrito);

// eliminar ultimo elemento del arreglo
carrito.pop();

console.log(carrito);

// eliminar del inicio del arreglo
carrito.splice(1, 1);
console.log(carrito);
