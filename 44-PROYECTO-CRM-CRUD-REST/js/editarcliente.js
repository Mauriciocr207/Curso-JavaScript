import { obtenerCliente, editarCliente } from "./API.js";
import { mostrarAlerta } from "./funciones.js";

(function() {
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');
    const form = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', async () => {
        const id = new URLSearchParams(window.location.search).get('id');
        const cliente = await obtenerCliente(id);
        mostrarCliente(cliente);

        form.addEventListener('submit', validarCliente);       
    })

    function mostrarCliente({nombre, empresa, email, telefono, id}) {
        idInput.value = id;
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
    }

    function validarCliente(e) {
        e.preventDefault();
        const cliente = {
            id: idInput.value,
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
        }
        if(!Object.values(cliente).every(input => input !== "")) {
            mostrarAlerta("Todos los campos son obligatorios");
            return;
        }
        editarCliente(cliente);
    }


})();