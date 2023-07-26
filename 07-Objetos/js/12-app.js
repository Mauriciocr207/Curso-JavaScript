// object literal
const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,
}

// object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true; 
}

const producto2 = new Producto('Monitor 20 pulgadas', 500);
const producto3 = new Producto('Television', 100);
console.log(producto2, producto3);