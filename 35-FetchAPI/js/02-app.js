const url = 'data/empleado.json';
const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', getData);

function getData() {
    fetch(url)
    .then((res) => {
        if(!res.ok) {
            throw Error('Error en consulta. Status: ' + res.status);
        }
 
        return res.json();
    })
    .then(showHTML)
    .catch(err => console.log(err.message));
}
 
function showHTML({id, nombre, empresa, trabajo}) {
    console.log(id, nombre, empresa, trabajo);

    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>Id: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `
}