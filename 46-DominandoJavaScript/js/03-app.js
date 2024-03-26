/**
 * COERCION
 * 
 * La conversión de un tipo a otro
 * de forma automática
 */

/**
 * Coercion implicita
 */
const num1 = 20;
const num2 = "40";

console.log(typeof (num1+num2), num1+num2); 

/**
 * Coerción explícita
 */
console.log(Number("120.23E2"));
console.log((20).toString());
console.log([1,1,1].toString());
console.log(JSON.stringify({nombre:"mau"}));