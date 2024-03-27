function auto(modelo, color) {
    // console.log(this);
    this.modelo = modelo;
    this.color = color;
}

const carro = new auto('Camaro', 'Negro');
// console.log(carro);



window.color = "negro";
function hola() {
    console.log(color);
}
hola();