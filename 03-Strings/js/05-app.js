const producto = "Monitor de 20 pulgadas";

console.log(producto);
console.log(producto.replace("pulgadas", "\""));
console.log(producto.replace("Monitor", "Monitor Curvo"));

// Cortar una cadena
console.log(producto.slice(0, 10));
console.log(producto.slice(0,5));
console.log(producto.slice(8));
console.log(producto.slice(2, 1));
console.log(producto.slice(-14));
// Alternativas a slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));

const usuario = "Roberto";
console.log(usuario.substring(0,1));
// alternativa
console.log(usuario.charAt(0));