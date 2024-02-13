const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Televisión", precio: 100},
    {nombre: "Tablet", precio: 100},
    {nombre: "Audifonos", precio: 100},
    {nombre: "Teclado", precio: 100},
    {nombre: "Celular", precio: 100},
    {nombre: "KeyCaps", precio: 100},
    {nombre: "Mouse", precio: 100},
    {nombre: "Micrófono", precio: 100},
]

// Itera sobre los elementos de un arreglo.
const result = carrito.forEach(producto => {
    return [producto.nombre, producto.precio];
});
console.log(result);

// Itera sobre los elementos de un arreglo y retorna un nuevo arreglo
const result2 = carrito.map(producto => {
    return [producto.nombre, producto.precio];
});
console.log(result2);
