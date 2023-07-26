let numero;
console.log(numero);
let num2 = null;
console.log(num2);
console.log(typeof num2);
console.log(typeof null); // object -> error histórico. 
                          // null es un primitivo no object. 
                          // reference: https://2ality.com/2013/10/typeof-null.html
console.log(numero == num2); // true
console.log(numero === num2); // false