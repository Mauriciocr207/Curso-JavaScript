const heading = document.querySelector('h1');


/**
 * Agregar CSS desde JS
 * 
 * Es posible, sin embargo, puede ser mejor 
 * agregar los estilos añadiendo o quitando clases
 */
console.log(heading.style);

heading.style.backgroundColor = 'red';
heading.style.fontFamily = 'Arial';
heading.style.textTransform = 'uppercase';


/**
 * Agregar CSS desde JS por clases
 * 
 * Se añaden o eliminan clases
 */
const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('card');
console.log(card.classList);
