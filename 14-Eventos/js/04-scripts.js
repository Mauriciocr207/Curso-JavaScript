const form = document.querySelector('#formulario');

form.addEventListener('submit', validarFormulario)

function validarFormulario(e) {
    e.preventDefault();

    console.log('consultando api...');
    console.log(e.target.method);
    console.log(e.target.action);
}