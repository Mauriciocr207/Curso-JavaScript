const cardDiv = document.querySelector('.card');

/**
 * Delegation
 * 
 * Se usa para seleccionar el elemento al que
 * se le hizo click.
 * Es otro método para distinguir a un elemento
 * en caso de event bubbling
 */
cardDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')) {
        console.log('Diste clic en titulo')
    }
    if(e.target.classList.contains('info')) {
        console.log('Diste clic en info')
    }
    if(e.target.classList.contains('card')) {
        console.log('Diste clic en card')
    }
})