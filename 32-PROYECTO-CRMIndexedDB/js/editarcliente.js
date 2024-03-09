import { DB } from "./DB/db.js";
import { Cliente } from "./Models/Cliente.js";
import { UI } from "./UI/UI.js";
const form = document.querySelector('#formulario');

window.onload = () => {
    DB.init()
        .then(mostrarCliente)
        .catch(() => {
            console.log('fallo al crear db');
        });
}

function mostrarCliente() {
    try {
        let id = parseInt(new URLSearchParams(window.location.search).get('id'));
        if(isNaN(id)) {
            throw new Error('El cliente no existe');
        }

        Cliente.get(id)
            .then((cliente) => {
                UI.loadClienteOnForm(cliente);
                form.addEventListener('submit', (e) => {
                    actualizarCliente(e, cliente);
                });
            }) // o solo .then(UI.loadClienteOnForm)
            .catch(() => {
                UI.showAlert('Cliente no encontrado', 'error');
                redirectToIndex();
            });

    } catch (err) {
        if(err instanceof Error) {
            UI.showAlert(err.message, 'error');
        }
        console.error(err);
    }
}

function actualizarCliente(e, cliente) {
    try {
        e.preventDefault();
        const newCliente = UI.getAllInputsInfo();
        if(!Cliente.validate(newCliente)) {
            throw new Error('Todos los campos son obligatorios');
        }

        newCliente.id = cliente.id;

        Cliente.update(newCliente)
            .then(() => {
                UI.showAlert('Cliente editado correctamente');
                redirectToIndex();
            })
            .catch(() => {
                UI.showAlert('No se pudo editar el cliente', 'error');
            });    
    } catch (err) {
        if(err instanceof Error) {
            UI.showAlert(err.message, 'error');
        }
        console.error(err);
    }        
}

function redirectToIndex() {
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2500);
}