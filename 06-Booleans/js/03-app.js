 const autenticado = true;
// MALA PRÁCTICA
// if(autenticado === true) {
// declarar condicional estricta cuando el valor boool
// ya está explícito
// BUENA PRÁCTICA
if(autenticado) {
    console.log("si puedes ver netflix");
} else {
    console.log("no puedes ver netflix");
}

console.log(autenticado ? "si" : "no");