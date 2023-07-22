const producto = "Monitor 20 pulgadas";

// repeat permite repetir una cadena de texto
const texto = " en Promoción".repeat(3);
console.log(texto);
console.log(`${producto}${texto} !!!`);

// Split, dividir un string
const actividad = "Estoy aprendiendo JS Moderno";
console.log(actividad.split(" "));
const hobbies = "hobbie1, hobbie2, hobbie3";
console.log(hobbies.split(","));

const tweet = "Aprendiendo JS #JSModernoConJuan";
console.log(tweet.split('#'));