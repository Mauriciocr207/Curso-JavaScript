// Probar dos valores

function sum(a,b) {
    return a+b;
}

let res = sum(1,2);
const esperado = 4;

if(res !== esperado) {
    console.error(`${res} no es el valor esperado`);
} else {
    console.log('Correcto!');
}
