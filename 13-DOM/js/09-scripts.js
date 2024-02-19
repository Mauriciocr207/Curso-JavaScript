const primerEnlace = document.querySelector('a');
console.log(primerEnlace);
primerEnlace.remove();

// Eliminar desde el padre
const nav = document.querySelector('.navegacion');
console.log(nav.children);
nav.removeChild(nav.children[2]);