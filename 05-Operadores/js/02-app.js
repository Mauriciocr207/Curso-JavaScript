const num1 = 20;
const num2 = "20";
const num3 = 30;

// comparador débil
console.log(num1 == num3); //false
console.log(num1 == num2); //true

// comparador estricto
console.log(num1 === num2); //false
console.log(num1 === parseInt(num2));

// diferencia
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(num1 != num2);
// diferencia estricta
console.log(num1 !== num2);
console.log(num1 !== parseInt(num2));

