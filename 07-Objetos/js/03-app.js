const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,
}

// agregar propiedades al objeto
producto.imagen = "imagen.jpg";

delete producto.disponible;
console.log(producto);
