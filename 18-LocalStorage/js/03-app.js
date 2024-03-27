// eliminar elementos
localStorage.removeItem('nombre');

// Actualizar un registro
const meses = JSON.parse(localStorage.getItem('meses'));
meses.push('Abril');
localStorage.setItem('meses', meses);


// limpiar todo lo que se encuentra en
// localStorage

localStorage.clear();