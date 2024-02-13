const auth = true;
const puedePagar = false;

console.log(auth && puedePagar ? 'si':'no'); 

const efectivo = 7000;
const credito = 400;
const disponible = efectivo + credito;
const total = 600;

if( efectivo > total || credito > total || disponible > total) {
    if(efectivo > total) {
        console.log('pagaste con efectivo');
        console.log(console.log);
    } else {
        console.log('otra forma de pago');
    }
} else {
    console.log('Fondo insuficiente');
}

// if anidado con ternario
console.log(auth ? puedePagar ? 'Autenticado y puede pagar':'No puede pagar' : 'No autenticado');