const producto = {
    nombre: "Monitor",
    precio: 400,
}

// destructuring de objetos
const {nombre} = producto;
console.log(nombre);


// destructuring de arrays
const numeros = [1,2,3,4,5,6];
const [,, tercero] = numeros;

console.log(tercero); 
