import { Citas } from "./Citas.js";
import { UI } from "./UI.js";
import { DB } from "./db.js";
const form = document.querySelector('#nueva-cita');

window.onload = () => {
    form.addEventListener('submit', addCita);
    UI.registerFormActions(addCita, updateCita);
    DB.init()
        .then(() => UI.renderCitas())
        .catch((err) => console.error(err));
}

// functiones de la lógica de negocio
function addCita(e) {
    try {
        e.preventDefault();
        const cita = UI.getAllInputsInfo();

        if(!Citas.validate(cita)) {
            throw new Error('Todos los campos son obligatorios');
        }
        
        Citas.add(cita).then(() => {
            UI.renderCitas();
            UI.showAlert('Creado correctamente');
            form.reset();
        });
    } catch (err) {
        if(err instanceof Error) {
            UI.showAlert(err.message, 'error');
        }
        console.error(err);
    }
}

function updateCita(e) {
    try {
        e.preventDefault();
        const id = parseInt(e.target.dataset.current);
        const cita = {id, ...UI.getAllInputsInfo()};
        const nodeElement = document.querySelector(`[data-id="${id}"]`);
        if(!Citas.validate(cita)) {
            throw new Error('Todos los campos son obligatorios');
        }

        Citas.update(cita).then(() => {
            UI.updateRenderCita(cita, nodeElement);
            UI.showAlert('Editado correctamente');
        });
    } catch (err) {
        if(err instanceof Error) {
            UI.showAlert(err.message, 'error');
        }
        console.error(err);
    }
    
}