import { Citas } from "./Citas.js";
import { UI } from "./UI.js";
const form = document.querySelector('#nueva-cita');

(() => form.addEventListener('submit', addCita))();
UI.registerFormActions(addCita, updateCita);


// functiones de la lógica de negocio
function addCita(e) {
    try {
        e.preventDefault();
        const cita = UI.getAllInputsInfo();

        if(!Citas.validate(cita)) {
            throw new Error('Todos los campos son obligatorios');
        }
        
        Citas.add(cita);
        form.reset();
        UI.renderCitas(Citas.getAll());
        UI.showAlert('Creado correctamente');
    } catch (err) {
        if(err instanceof Error) {
            UI.showAlert(err.message, 'error');
        }
    }
}

function updateCita(e) {
    try {
        e.preventDefault();
        const id = e.target.dataset.current;
        const cita = {id, ...UI.getAllInputsInfo()};
        const nodeElement = document.querySelector(`[data-id="${id}"]`);
        if(!Citas.validate(cita)) {
            throw new Error('Todos los campos son obligatorios');
        }

        Citas.update(cita);
        UI.updateRenderCita(cita, nodeElement);
        UI.showAlert('Editado correctamente');
    } catch (err) {
        if(err instanceof Error) {
            UI.showAlert(err.message, 'error');
        }
    }
    
}