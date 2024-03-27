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
    form.addEventListener('submit', agregarCliente);
}

function agregarCliente(e) {
    try {
        e.preventDefault();
        const cliente = UI.getAllInputsInfo(); 

        if(!Cliente.validate(cliente)) {
            throw new Error('Todos los campos son obligatorios');
        }
        
        Cliente.add(cliente)
            .then(() => {
                UI.showAlert('Cliente creado correctamente');
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