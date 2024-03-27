const btnGuardarCliente =document.querySelector('#guardar-cliente');
const contenido = document.querySelector('#platillos .contenido');


let cliente = {
    mesa: '',
    hora: '',
    pedido: []
};

const categorias = ['Comida', 'Bebidas', 'Postres'];

btnGuardarCliente.addEventListener('click', guardarCliente);
mostrarSecciones();
    obtenerPlatillos();

function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    const camposVacios = [mesa, hora].some(campo => campo === "");

    if(camposVacios) {
        const existeAlerta = document.querySelector('.alerta');
        if(!existeAlerta) {
            const alerta = document.createElement('DIV');
            alerta.classList.add('alerta', 'invalid-feedback', 'd-block', 'text-center');
            alerta.textContent = "Todos los campos son obligaotorios";
            document.querySelector('.modal-body form').appendChild(alerta);

            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }
        return;
    }

    cliente = {...cliente, mesa, hora};

    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();

    // mostrarSecciones();
    // obtenerPlatillos();
}

function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));
}

function obtenerPlatillos() {
    const url = `http://localhost:4000/platillos`;
    fetch(url)
        .then(response => response.json())
        .then(mostrarPlatillos)
        .catch(err => console.log(err));

}

function mostrarPlatillos(platillos) { 
    platillos.forEach(renderPlatillo);
}

function renderPlatillo({id, nombre, precio, categoria: categoriaId}) {
    const row = document.createElement('DIV');
    row.classList.add('row' ,'py-3', 'border-top');

    const nombreDIV = document.createElement('DIV');
    nombreDIV.classList.add('col-md-4');
    nombreDIV.textContent = nombre;
    
    const precioDIV = document.createElement('DIV');
    precioDIV.classList.add('col-md-3', 'fw-bold');
    precioDIV.textContent = "$" + precio;
    
    const categoriaDIV = document.createElement('DIV');
    categoriaDIV.classList.add('col-md-3');
    categoriaDIV.textContent = categorias[categoriaId - 1];
    
    const inputCantidad = document.createElement('INPUT');
    inputCantidad.type = "number";
    inputCantidad.min = 0;
    inputCantidad.value = 0;
    inputCantidad.onchange = function() {
        const cantidad = parseInt(inputCantidad.value);
        agregarPlatillo({id, nombre, precio, categoria:categoriaId, cantidad});
    };
    inputCantidad.id = `producto-${id}`;
    inputCantidad.classList.add('form-control');

    
    const agregar = document.createElement('DIV');
    agregar.classList.add('col-md-2');
    agregar.appendChild(inputCantidad);
    
    
    row.append(nombreDIV, precioDIV, categoriaDIV, agregar);

    contenido.appendChild(row);
}

function agregarPlatillo(producto) {
    let {pedido} = cliente;
    if(producto.cantidad > 0) {
        if(pedido.some(({id}) => id === producto.id)) {
            cliente.pedido = pedido.map(articulo => {
                if(articulo.id === producto.id) {
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            })
        } else {
            cliente.pedido = [...pedido, producto];  
        }
    } else {
        cliente.pedido = pedido.filter(articulo => articulo.id !== producto.id);
    }
    
    limpiarHTML();
    if(cliente.pedido.length === 0) {
        mensajePedidoVacio();
    } else{
        actualizarResumen();
    }
}

function actualizarResumen() {
    const contenido = document.querySelector('#resumen .contenido');

    const resumen = document.createElement('DIV');
    resumen.classList.add('col-md-6', 'card', 'py-5', 'px-3', 'shadow');

    const mesa = document.createElement('P');
    mesa.textContent = "Mesa: ";
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('SPAN');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');
    
    const hora = document.createElement('P');
    hora.textContent = "Hora: ";
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('SPAN');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    const heading = document.createElement('H3');
    heading.textContent = "Platillos consumidos";
    heading.classList.add('my-4', 'text-center');

    const grupo = document.createElement('UL');
    grupo.classList.add('list-group');

    const {pedido} = cliente;
    pedido.forEach(articulo => {
        const {nombre, cantidad, precio, id} = articulo;

        const lista = document.createElement('LI');
        lista.classList.add('list-group-item');

        const nombreEl = document.createElement('H4');
        nombreEl.classList.add('my-4');
        nombreEl.textContent = nombre;

        const cantidadEl = document.createElement('P');
        cantidadEl.classList.add('fw-bold');
        cantidadEl.innerHTML = `Cantidad: <span class="fw-normal">${cantidad}</span>`;

        const precioEl = document.createElement('P');
        precioEl.classList.add('fw-bold');
        precioEl.innerHTML = `Precio: <span class="fw-normal">$${precio}</span>`; 
        
        const subtotalEl = document.createElement('P');
        subtotalEl.classList.add('fw-bold');
        subtotalEl.innerHTML = `Subtotal: <span class="fw-normal">$${precio * cantidad}</span>`; 
        
        const eliminarBtn = document.createElement('BUTTON');
        eliminarBtn.classList.add('btn', 'btn-danger');
        eliminarBtn.textContent = "Eliminar del pedido";

        eliminarBtn.onclick = function() {
            eliminarProducto(id);
        }

        lista.append(nombreEl, cantidadEl, precioEl, subtotalEl, eliminarBtn);

        grupo.appendChild(lista);
    });

    resumen.append(mesa, hora, heading, grupo);

    contenido.appendChild(resumen);

    // mostrar formulario de propinas
    formularioPropinas();
}

function limpiarHTML() {
    const contenido = document.querySelector('#resumen .contenido');
    while(contenido.firstChild) {
        contenido.firstChild.remove();
    }
}

function eliminarProducto(id) {
    cliente.pedido = cliente.pedido.filter(articulo => articulo.id !== id);
    limpiarHTML();
    document.querySelector(`#producto-${id}`).value = 0;
    if(cliente.pedido.length === 0) {
        mensajePedidoVacio();
    } else{
        actualizarResumen();
    }
}

function mensajePedidoVacio() {
    const contenido = document.querySelector('#resumen .contenido');

    const texto = document.createElement('P');
    texto.classList.add('text-center');
    texto.textContent = "Añade los elementos del pedido";

    contenido.appendChild(texto);
}

function formularioPropinas() {
    const contenido = document.querySelector('#resumen .contenido');
    
    const parentForm = document.createElement('DIV');
    parentForm.className = "col-md-6 px-3 shadow";

    const form = document.createElement('DIV');
    form.className = "formulario card py-3 px-3 h-100";
    
    const heading = document.createElement('H3');
    heading.classList.add('my-4', 'text-center');
    heading.textContent = "Propina";

    const radiosParentELement = document.createElement('DIV');
    const radioOptions = [10, 25, 50];
    radioOptions.forEach(option => {
        const radio = document.createElement('DIV');
        radio.classList.add('form-check');
        radio.innerHTML = `
            <input type="radio" class="form-check-input" value="${option}" name="propina"/>
            <label class="form-check-label">${option}%</label>
        `;
        radio.onchange = function() {
            mostrarPropina(option);
        };
        radiosParentELement.appendChild(radio);
    })

    form.append(heading, radiosParentELement);
    parentForm.append(form);
    contenido.appendChild(parentForm);
}

function mostrarPropina(porcentajePropina) {
    const {subtotal, propina, total} = calcularPropina(porcentajePropina);
    
    let propinaHTML = document.querySelector('.propina');
    if(!propinaHTML) {
        propinaHTML = document.createElement('DIV');
        propinaHTML.classList.add('propina');
        document.querySelector('.formulario').appendChild(propinaHTML);
    }
    propinaHTML.innerHTML = `
        <p class="fs-3 fw-bold mt-2">Subtotal Consumo: <span class="fw-normal">$${subtotal}</span></p>
        <p class="fs-3 fw-bold mt-2">Propina: <span class="fw-normal">$${propina}</span></p>
        <p class="fs-3 fw-bold mt-2">Total Consumo: <span class="fw-normal">$${total}</span></p>
    `;

    
}

function calcularPropina(porcentajePropina) {
    const subtotal = cliente.pedido.reduce((total, {cantidad, precio}) => total + cantidad*precio, 0);
    const propina = subtotal * porcentajePropina / 100;
    const total = subtotal + propina;
    return  {subtotal, propina, total};
}