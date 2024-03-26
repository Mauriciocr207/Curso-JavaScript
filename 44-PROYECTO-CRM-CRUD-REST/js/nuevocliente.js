import { nuevoCliente } from "./API.js";
import { mostrarAlerta } from "./funciones.js";

(function() {
    const form = document.querySelector('#formulario');

    form.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {nombre, email, telefono, empresa};

        if(!Object.values(cliente).every(input => input !== "")) {
            mostrarAlerta("Todos los campos son obligatorios");
            return;
        }

        nuevoCliente(cliente);
    }
})();