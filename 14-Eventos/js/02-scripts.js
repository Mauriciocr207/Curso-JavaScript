const nav = document.querySelector('.navegacion');

/**
 * Registrar eventos con addEventListener
 */


// EVENTOS CON EL MOUSE


/**
 * Evento: click
 */
nav.addEventListener('click', () => {
    console.log('click en nav');
});

/**
 * Evento: mouseenter
 */
nav.addEventListener('mouseenter', () => {
    console.log('entrando a la navegacion');
    nav.style.backgroundColor = "blue";
});
 
/**
 * Evento: mouseout
 */
nav.addEventListener('mouseout', () => {
    console.log('saliendo a la navegacion');
    nav.style.backgroundColor = "brown";
});

/**
 * Evento: mousedown
 * 
 * Cuando se deja presionado el mouse
 */
nav.addEventListener('mousedown', () => {
    console.log('presionando en nav');
})

/**
 * Evento: mouseup
 * 
 * Cuando se suelta el click del mouse una vez 
 * ha sido presionado
 * 
 * NOTA: mouseup y click se lanzan al mismo
 * tiempo, pues mouseup indica que ya se le
 * ha dado click a un elemento
 */
nav.addEventListener('mouseup', () => {
    console.log('has soltado el nav');
})

/**
 * Evento: dblclick (doble click)
 * 
 * NOTA: Se ejecuta al mismo tiempo que
 * click y mouseup
 */
nav.addEventListener('dblclick', () => console.log('doble click en nav'));