/**
 * Traversing de DOM
 * 
 * Se refiere a ir recorriendo los nodos o elementos del
 * html en el sitio web
 */
const nav = document.querySelector('nav.navegacion');

console.log(nav);
console.log(nav.childNodes); // Los espacios en blanco son considerados elementos
console.log(nav.children); // Los espacios en blanco no se consideran

console.log(nav.children[0].nodeName);
console.log(nav.children[0].nodeType);

console.log(nav.firstElementChild);
console.log(nav.lastElementChild);

const card = document.querySelector('.card');

// Modificar el heading del primer card
let i = 0;
const arrayText = [
    "Nuevo Heading desde traversing de DOM con JS",
    "Segundo texto",
    "Tercer texto"
]
setTimeout(() => {
    const intervalId = setInterval(() => {
        card.children[1].children[1].textContent = arrayText[i];
        i++;
        if(i === 3) {
            clearInterval(intervalId);
        }
    }, 1000);
}, 1000);

// Modificar la imagen del primer card
card.children[0].src = 'img/hacer3.jpg';
console.log(card.children[0]);

/**
 * Obtener el elemento padre
 */
console.log(card.parentNode);
console.log(card.parentElement);

// .parentElement retorna 'null' si el padre no es
// un elemento. Esa es la principal diferencia
// por ejemplo
console.log(document.documentElement.parentNode); // document
console.log(document.documentElement.parentElement); // null


console.log(card.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling); // obtiene el siguiente elemento hermano de card. Funcionará hasta que no hayan más elementos

const ultimoCard = document.querySelector('.card:last-child');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling); // obtiene el elemento hermano anterior del card. Funcionará hasta que no hayan más elementos