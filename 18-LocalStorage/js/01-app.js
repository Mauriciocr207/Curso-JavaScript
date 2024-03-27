/**
 * localStorage -> sólo almacena strings
 */
localStorage.setItem('nombre', 'Mauricio');

// objetos en localStorage
const datos = {
    nombre: 'mauricio',
    apellido: 'perez',
    carrito: [
        {
            idProducto: 102312,
            nombre: 'Silla'
        },
        {
            idProducto: 102312,
            nombre: 'Mesa'
        }
    ]
};
localStorage.setItem('datos', JSON.stringify(datos));

// arreglos en localStorage
const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));