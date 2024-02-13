for (let i = 0; i < 10; i++) {
    if(i === 5) {
        console.log('CINCO');
        break;
    }
    console.log(`Número ${i}`);
}
for (let i = 0; i < 8; i++) {
    if(i === 5) {
        console.log('CINCO');
        continue;
    }
    console.log(`Número ${i}`);
}

const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Televisión", precio: 100},
    {nombre: "Tablet", precio: 100},
    {nombre: "Audifonos", precio: 100, descuento: true},
    {nombre: "Teclado", precio: 100},
    {nombre: "Celular", precio: 100},
    {nombre: "KeyCaps", precio: 100},
    {nombre: "Mouse", precio: 100},
    {nombre: "Micrófono", precio: 100},
]

for (let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}