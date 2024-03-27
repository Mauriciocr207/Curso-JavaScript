// EVENT BUBBLING

const cards = [];
for (let i = 1; i <= 3; i++) {
    const card = document.querySelector(`.card:nth-child(${i})`);
    cards.push({
        card: card,
        info: card.querySelector('.info'),
        title: card.querySelector('.titulo'),
    })
}


/**
 * ¿Qué es el event bubbling?
 * 
 * El event bubbling o burbujeo de eventos (por su 
 * traducción al español) es un método de 
 * propagación de eventos en la API del DOM.
 * Se da cuando activamos el evento de un elemento, 
 * y si su nodo padre tiene registrado otro evento,
 * este último se activara automáticamente y así 
 * ira escalando en la jerarquía del DOM.
 */
cards[0].card.addEventListener('click', () => console.log('click en primer card'));
cards[0].info.addEventListener('click', () => console.log('click en primer info'));
cards[0].title.addEventListener('click', () => console.log('click en primer titulo'));

/**
 * Fase de Captura: Se busca el elemento mas profundo en el DOM que tenga registrado un evento en su listener.
 * Fase de Target: Ejecuta el evento del elemento en si.
 * Fase de Burbuja: Verifica si los elementos padre de dicho elemento tienen eventos registrados en sus listeners, si es así, ejecuta dichos eventos de manera automática.
 */

/**
 * Se puede prevenir este comportamiento añadiendo
 * event.stopPropagation();
 */
cards[1].card.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en card')
});
cards[1].info.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en info')
});
cards[1].title.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en titulo')
});


/**
 * Se puede alterar el orden en el que se
 * ejecutan los eventos. Esto alterando 
 * la fase de captura, añadiendo:
 * {capture:true}
 * 
 * En la fase de captura se busca al elemento
 * al que se le lanzó el evento. Si seleccionamos
 * capture:true, indicamos que se capture un 
 * elemento además del que se le lanzó el evento.
 * Con ello, alteramos el orden de ejecuión de
 * eventos
 * 
 */
cards[2].card.addEventListener('click', e => {
    console.log('click en card')
}, {capture:true});
cards[2].info.addEventListener('click', e => {
    console.log('click en info')
}, {capture: true});
cards[2].title.addEventListener('click', e => {
    console.log('click en titulo')
});

/**
 * Con el código anterior, se ve que se invierte
 * el orden de ejecución de eventos
 */




