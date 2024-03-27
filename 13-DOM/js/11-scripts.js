const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', toggleFooter);

function toggleFooter() {
    if(footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}

/**
 * `this` es una forma de acceder a las propiedades de un objeto en 
 * los métodos.
 * Sin embargo, cuando se utiliza con addEventListener hace
 * referencia a lo que mandó a llamar esa función
 */
