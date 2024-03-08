import { DB } from "./DB/db.js";
import { Cliente } from "./Models/Cliente.js";
import { UI } from "./UI/UI.js";
const form = document.querySelector('#formulario');

window.onload = () => {
    DB.init()
        .then(() => {
            console.log('base de datos creada');
        })
        .catch(() => {
            console.log('fallo al crear db');
        });
    form.addEventListener('submit', editarCliente);
}

function editarCliente(e) {
    try {
        e.preventDefault();
        let id = parseInt(new URLSearchParams(window.location.search).get('id'));
        if(isNaN(id)) {
            throw new Error('El cliente no existe');
        }

        Cliente.get(id).then(actualizarCliente);
    } catch (err) {
        if(err instanceof Error) {
            UI.showAlert(err.message, 'error');
            console.log('error');
        }
        console.error(err);
    }
}

function actualizarCliente(cliente) {
    try {
        const newCliente = UI.getAllInputsInfo();
        if(!Cliente.validate(newCliente)) {
            throw new Error('Todos los campos son obligatorios');
        }

        newCliente.id = cliente.id;
        console.log('nuevo cliente: ', newCliente);
        console.log('old cliente: ', cliente);

        Cliente.add(newCliente)
            .then(() => {
                UI.showAlert('Cliente editado correctamente');
                form.reset();
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 3000);
            })
            .catch(() => {
                UI.showAlert('No se pudo crear el cliente', 'error');
            });    
    } catch (err) {
        if(err instanceof Error) {
            UI.showAlert(err.message, 'error');
        }
        console.error(err);
    }        
}