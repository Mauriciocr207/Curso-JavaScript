// variables y selectores
const form = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');



// eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    form.addEventListener('submit', agregarGasto);
}


// clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(nombre, cantidad) {
        this.gastos = [...this.gastos, {nombre, cantidad, id: Date.now()}];
    }

    calcularRestante() {
        const gastoTotal = this.gastos.reduce((total,gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastoTotal;
    }

    borrarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();
    }
}

class UI {
    static insertarPresupuesto(presupuestoObj) {
        const {presupuesto, restante} = presupuestoObj;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }
    static imprimirAlerta(mensaje, tipo) {
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert');
        if(tipo === "danger") {
            divMensaje.classList.add('alert-danger');
        } else if(tipo === "warning") {
            divMensaje.classList.add('alert-warning');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // mensaje
        divMensaje.textContent = mensaje;

        document.querySelector('.primario').insertBefore(divMensaje, form);
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
    static imprimirGastoListado(gastos = []) {
        while(gastoListado.firstChild) {
            gastoListado.firstChild.remove();
        }

        gastos.forEach(gasto => {
            const {cantidad, nombre, id} = gasto;
            const li = document.createElement('LI');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.dataset.id = id
            li.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$${cantidad}</span>`;
            const btnBorrar = document.createElement('BUTTON');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = "Borrar &times;";
            btnBorrar.onclick = function() {
                presupuestoObj.borrarGasto(id);
                const {restante, presupuesto} = presupuestoObj;
                UI.actualizarRestante(restante, presupuesto);
                li.remove();
            }
            li.appendChild(btnBorrar);
            gastoListado.appendChild(li);

        })        
    }

    static actualizarRestante(restante, presupuesto) {
        document.querySelector('#restante').textContent = restante;
        const restanteDIV  = document.querySelector('.restante');
        restanteDIV.classList.remove('alert-danger', 'alert-warning');

        if(restante < .25*presupuesto) {
            this.imprimirAlerta('Has gastado más del 75%', 'danger');
            restanteDIV.classList.remove('alert-warning');
            restanteDIV.classList.add('alert-danger');
        } else if(restante < .5*presupuesto) {
            this.imprimirAlerta('Has gastado más del 50%', 'warning');
            restanteDIV.classList.remove('alert-danger');
            restanteDIV.classList.add('alert-warning');
        }

        if(restante <= 0) {
            this.imprimirAlerta('El presupuesto se ha agotadoa', 'danger');
            form.querySelector('button[type="submit"]').disabled = true;
        } else  {
            form.querySelector('button[type="submit"]').disabled = false;
        }
    }
}


let presupuestoObj;
// funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');

    if(presupuestoUsuario === "" || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    presupuestoObj = new Presupuesto(presupuestoUsuario);
    UI.insertarPresupuesto(presupuestoObj);
}

function agregarGasto(e) {
    e.preventDefault();

    // leer datos formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if(nombre === ""  || cantidad === "") {
        UI.imprimirAlerta('Ambos mensajes son obligatorios', 'danger');
        return;
    } else if(cantidad <= 0 || isNaN(cantidad)) {
        UI.imprimirAlerta('Cantidad no válida', 'danger');
        return;
    }

    presupuestoObj.nuevoGasto(nombre, cantidad);

    UI.imprimirAlerta('Correcto');
    form.reset();

    const {gastos} = presupuestoObj;
    UI.imprimirGastoListado(gastos);

    presupuestoObj.calcularRestante();

    const {restante, presupuesto} = presupuestoObj;
    UI.actualizarRestante(restante, presupuesto);
}