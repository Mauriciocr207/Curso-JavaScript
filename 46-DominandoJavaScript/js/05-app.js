function persona(el1, el2) {
    console.log(`nombre: ${this.nombre}, escucho ${el1}, ${el2}`);
}

const info = {
    nombre: "Juan",
}

const musicaFavorita = ["Metal", "Rock"];



// persona.call(info, ...musicaFavorita);
// persona.apply(info, musicaFavorita);
const newFn = persona.bind(info, ...musicaFavorita);
newFn(); 