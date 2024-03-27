const diaHoy = new Date();
let value;

value = diaHoy;
// diaHoy.setFullYear(2010);
value = diaHoy.getFullYear();
value = diaHoy.getMinutes();
value = diaHoy.getHours();
value = diaHoy.getTime();

console.log(value);
console.log(Date.now());