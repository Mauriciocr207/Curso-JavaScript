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