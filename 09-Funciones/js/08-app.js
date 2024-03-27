function sumar(a,b) {
    return a+b;
}

const res = sumar(2,3);
console.log(res); 

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}
function calcImpuesto(total) {
    return 1.16 * total;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

console.log(total);

const totalPagar = calcImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);