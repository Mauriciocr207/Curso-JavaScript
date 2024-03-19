const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');

cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then(result => result.json())
        .then(mostrarHTML);
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('.contenido');


    empleados.forEach(empleado => {
        const {id, nombre, empresa, trabajo} = empleado;
        contenido.innerHTML = `
            <p>Id: ${id}</p>
            <p>Empleado: ${nombre}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
        `;
    });
}