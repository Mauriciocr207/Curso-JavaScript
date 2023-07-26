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
const producto3 = {
    nombre: "teclado",
    precio: 300,
}

let resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];



console.log(resultado);