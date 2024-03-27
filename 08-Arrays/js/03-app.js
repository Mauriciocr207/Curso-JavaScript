const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

console.log(meses);
console.log(meses[0]);
console.log(meses[1]);
console.log(meses[2]);

// cuanto mide el arreglo
console.log(meses.length);

for(let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}
meses.forEach(e => {
    console.log(e);
})