const dinero = 300;
const total = 400;
const tarjeta = true;
const cheque = true;

if(dinero >= total) {
    console.log('Si podemos pagar');
} else if(cheque) {
    console.log('Tengo cheque');
} else if(tarjeta) {
    console.log('Pago con tarjeta');
} else {
    console.log('Fondo insuficiente');
}