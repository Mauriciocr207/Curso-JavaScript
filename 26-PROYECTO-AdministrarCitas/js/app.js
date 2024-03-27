const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
const form = document.querySelector('#nueva-cita');

const containerCitas = document.querySelector('#citas');
(() => form.addEventListener('submit', addCita))();

class Citas {
    static citas = [];
    
    static add(obj) {
        this.citas = [...this.citas, {
            id: Date.now(),
            ...obj,
        }];
    }

    static update(idCita, obj) {
        this.citas = this.citas.map((cita => cita.id === idCita ? obj:cita));
    }

    static delete(idCita) {
        this.citas = this.citas.filter(({id}) => id !== idCita);
    }

    static getAll() {
        return this.citas;
    }

    static getById(id) {
        return this.citas.find(cita => cita.id === parseInt(id));
    }

    static validate(cita) {
        const {
            mascota, 
            propietario, 
            telefono, 
            fecha,
            hora,
            sintomas
        } = cita;
        if(mascota === "" || propietario  === "" || telefono  === "" || fecha  === "" || hora  === "" || sintomas === "") {
            return false;
        }
        return true;
    }
    
}

class UI {
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
        form.removeEventListener('submit', addCita);
        form.addEventListener('submit', updateCita);
    }

    static setFormToCreate() {
        form.reset();
        form.querySelector('[type="submit"]').textContent = "Crear Cita";
        form.removeEventListener('submit', updateCita);
        form.addEventListener('submit', addCita);
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
}


// functiones de la lógica de negocio
function addCita(e) {
    e.preventDefault();
    try {
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
    e.preventDefault();
    try {
        const id = e.target.dataset.current;
        const cita = {id, ...UI.getAllInputsInfo()};
        const nodeElement = document.querySelector(`[data-id="${id}"]`);
        if(!Citas.validate(cita)) {
            throw new Error('Todos los campos son obligatorios');
        }

        Citas.update(id, cita);
        UI.updateRenderCita(cita, nodeElement);
        UI.setFormToCreate();
        UI.showAlert('Editado correctamente');
    } catch (err) {
        if(err instanceof Error) {
            UI.showAlert(err.message, 'error');
        }
    }
    
}