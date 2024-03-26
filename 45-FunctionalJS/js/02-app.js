const suma = (a,b) => a+b;
const mult = (a,b) => a*b;

const sumarMultiplicar = fn => fn(10,20);

console.log(sumarMultiplicar(suma));
console.log(sumarMultiplicar(mult));

