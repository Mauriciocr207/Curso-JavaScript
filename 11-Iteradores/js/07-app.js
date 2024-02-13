const p = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Js'];
// p.forEach( (pendiente, index) => {
//     console.log(`${index} : ${pendiente}`);
// })

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

for (const pendiente of p) {
    console.log(pendiente);
}
for (const producto of carrito) {
    console.log(producto.nombre);
}