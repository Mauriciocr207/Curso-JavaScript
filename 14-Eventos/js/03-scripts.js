const busqueda = document.querySelector('.busqueda');

// EVENTOS DEL TECLADO

/**
 * Evento: keydown
 * 
 * Cuando se presiona una tecla
 */
busqueda.addEventListener('keydown',  () => {
    console.log('presionando una tecla');
});

/**
 * Evento: keyup
 * 
 * Cuando se presiona una tecla
 */
busqueda.addEventListener('keyup',  () => {
    console.log('la tecla se ha soltado');
});

/**
 * Evento: blur
 * 
 * Cuando Cuando se sale de un input
 */
busqueda.addEventListener('blur',  () => {
    console.log('has salido del buscador');
});

/**
 * Evento: copy
 * 
 * Cuando Cuando se copia texto
 */
document.addEventListener('copy',  () => {
    console.log('Copiaste un texto en la página');
});

/**
 * Evento: paste
 * 
 * Cuando Cuando se pega texto, después de haber
 * copiado
 */
document.addEventListener('paste',  (e) => {
    const pastedText = e.clipboardData.getData("text");
    console.log(`has pegado: ${pastedText}`);
});

/**
 * Evento: cut
 * 
 * Cuando cortas un texto
 */
document.addEventListener('cut',  (e) => {
    console.log(`has cortado un texto`);
});

/**
 * Evento: input
 * 
 * Cuando ingresas datos a un input
 */
document.addEventListener('input',  (e) => {
    if(e.target.value === "") {
        console.log('es vacío');
        return;
    }
    console.log(e.target.value);
});



