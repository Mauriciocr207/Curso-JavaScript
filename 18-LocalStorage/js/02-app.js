const nombre = localStorage.getItem('nombre');
console.log(nombre);

const algoQueNoExisteEnLS = localStorage.getItem('noexiste');
console.log(algoQueNoExisteEnLS); //return null

const productoJSON = JSON.parse(localStorage.getItem('datos'));
console.log(productoJSON);