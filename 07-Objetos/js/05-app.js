const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,
    informacion: {
        peso: "1kg",
        medida: "1m",
    }
}

console.log(producto);

console.log(producto.informacion);
console.log(producto.informacion.medida);
console.log(producto.informacion.peso);