const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const cerrarBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', pantallaCompleta);
cerrarBtn.addEventListener('click', salirPantallaCompleta);

function pantallaCompleta() {
    document.documentElement.requestFullscreen();
}

function salirPantallaCompleta() {
    document.exitFullscreen();
}