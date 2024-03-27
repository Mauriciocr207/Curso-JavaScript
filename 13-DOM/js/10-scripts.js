/**
 * DOM SCRIPTING
 */
const enlace = document.createElement('A');
enlace.textContent = 'Nuevo enlace';
enlace.href = '/nuevo-enlace';
enlace.target = "_blank";
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('nueva-clase-css');
enlace.onclick = miFuncion;

const nav = document.querySelector('.navegacion');
// nav.appendChild(enlace); //lo añade al final de los elementos
console.log(nav.children);
nav.insertBefore(enlace, nav.children[1]);




console.log(enlace);

function miFuncion() {
    console.log('click desde nuevo enlace');
}

/**
 * Crear un card de forma dinámica
 */
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona' 
parrafo3.classList.add('precio');

const info = document.createElement('DIV');
info.classList.add('info');

info.append(parrafo1, parrafo2, parrafo3); // permite agregar varios childNodes

const img = document.createElement('IMG');
img.src = 'img/hacer2.jpg';

const card = document.createElement('DIV');
card.classList.add('card');

card.append(img, info);

const cardGrid = document.querySelector('.hacer .contenedor-cards');
cardGrid.appendChild(card);



