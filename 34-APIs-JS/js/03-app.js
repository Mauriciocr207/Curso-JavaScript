window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

console.log(navigator);
function actualizarEstado() {
    if(navigator.onLine) {
        console.log('Si estás conectado');
    } else {
        console.log('Sin conexión');
    }
}