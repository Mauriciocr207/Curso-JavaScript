const b1 = true;
const b2 = false;
const b3 = "true";

console.log(b1 == b3); // false; 
                       // En bool´s no funciona la comparativa
                       // débil con string y bool
const b4 = new Boolean(false);
console.log(typeof new Boolean());