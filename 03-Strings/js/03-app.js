// Concatenación de strings
const producto = "Monitor 20 pulgadas";
const precio = "30 USB";

console.log(producto.concat(" ").concat(precio));
producto.concat("en descuento");
console.log(producto); // No se modifica el string original
console.log(producto.concat("").concat("En descuento"))

console.log(producto + " Connun precio de: " + precio);
console.log("El producto " + producto + " Tiene un precio de " + precio);
console.log(`El producto '${producto}' tiene un precio de ${precio}`);