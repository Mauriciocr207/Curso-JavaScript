import { Citas } from "./Citas.js";

const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
const form = document.querySelector('#nueva-cita');
const containerCitas = document.querySelector('#citas');

export class UI {
    static #oncreate;
    static #onupdate;
    static showAlert(message, type) {
        const alert = document.createElement('DIV');
        alert.classList.add('text-center', 'alert', 'd-block', 'col-12');

        if(type === "error") {
            alert.classList.add('alert-danger');
        } else {
            alert.classList.add('alert-success');
        }

        alert.textContent = message;

        document.querySelector('#contenido').insertBefore(
            alert, 
            document.querySelector('.agregar-cita')
        );

        setTimeout(() => {
            alert.remove();
        }, 2000);
    }

    static renderCitas(citas) {
        while(containerCitas.firstChild) {
            containerCitas.firstChild.remove();
        }
        citas.forEach(cita => {
            const container = this.createCitaHTML(cita);
            containerCitas.appendChild(container);
        })
    }

    static updateRenderCita(cita, nodeElement) {
        const newNodeCitaElement = this.createCitaHTML(cita);
        containerCitas.insertBefore(newNodeCitaElement, nodeElement);
        nodeElement.remove();
        this.setFormToCreate();
    }

    static createCitaHTML({
        mascota, 
        id,
        propietario, 
        telefono, 
        fecha,
        hora,
        sintomas
    }) {
        const container = document.createElement('DIV');
        container.dataset.id = id;
        container.className = 'card-title font-weight-bolder';
        container.innerHTML = `
            <h2 class="card-title">${mascota}</h2>
            <p><span class="font-weight-bolder">Propietaruio:</span> ${propietario}</p>
            <p><span class="font-weight-bolder">Tel:</span> ${telefono}</p>
            <p><span class="font-weight-bolder">Fecha:</span> ${fecha}</p>
            <p><span class="font-weight-bolder">Hora:</span> ${hora}</p>
            <p><span class="font-weight-bolder">Síntomas:</span> ${sintomas}</p>
        `;
    
        const deleteBtn = document.createElement('BUTTON');
        deleteBtn.className = 'btn btn-danger mr-2';
        deleteBtn.textContent = 'Borrar';
        deleteBtn.onclick = function() {
            Citas.delete(id);
            container.remove();
            UI.setFormToCreate();
        };
    
        const updateBtn = document.createElement('BUTTON');
        updateBtn.className = 'btn btn-info';
        updateBtn.textContent = 'Actualizar';
        updateBtn.onclick = function(e) {
            UI.setFormToUpdate({
                id,
                mascota, 
                propietario, 
                telefono, 
                fecha,
                hora,
                sintomas
            }, container);
        };
        container.append(deleteBtn, updateBtn);
    
        return container;
    }

    static setFormToUpdate(cita) {
        Object.keys(cita)
            .filter(key => key !== "id")
            .forEach(key => {
            const input = form.querySelector(`[name="${key}"]`);
            input.value = cita[key];
        });

        form.querySelector('[type="submit"]').textContent = "Actualizar Cita";
        form.dataset.current = cita.id;
        form.removeEventListener('submit', this.#oncreate);
        form.addEventListener('submit', this.#onupdate);
    }

    static setFormToCreate() {
        form.reset();
        form.querySelector('[type="submit"]').textContent = "Crear Cita";
        form.removeEventListener('submit', this.#onupdate);
        form.addEventListener('submit', this.#oncreate);
        delete form.dataset.current
    }

    static getAllInputsInfo() {
        return {
            mascota: mascotaInput.value,
            propietario: propietarioInput.value,
            telefono: telefonoInput.value,
            fecha: fechaInput.value,
            hora: horaInput.value,
            sintomas: sintomasInput.value
        };
    }

    static registerFormActions(oncreate, onupdate) {
        this.#oncreate = oncreate;
        this.#onupdate = onupdate;
    }
}