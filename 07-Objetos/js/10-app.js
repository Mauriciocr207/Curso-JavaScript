const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,
}
const medidas = {
    peso: "1kg",
    longitud: "1m",
}

const resultado = Object.assign(producto, medidas);
const resultado2 = {
    ...producto,
    ...medidas,
}
console.log(resultado);
console.log(resultado2);