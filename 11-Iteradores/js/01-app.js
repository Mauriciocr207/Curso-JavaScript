for(let i = 0; i<3; i ++) {
    if(!(i%2)) {
        console.log(`${i} par` );
    } else {
        console.log(`${i} no es par`);
    }
}

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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}