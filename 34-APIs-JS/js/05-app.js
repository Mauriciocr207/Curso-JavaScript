/**
 * Visibility state API
 */

document.addEventListener('visibilitychange', () => {
    console.log(document.visibilityState);
    if(document.visibilityState === "visible") {
        console.log('Ejecutar video');
    } else {
        console.log('Pausar video');
    }
})