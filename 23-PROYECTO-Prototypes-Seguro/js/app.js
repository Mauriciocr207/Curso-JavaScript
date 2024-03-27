/**
 * Objeto Seguro
 */
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
    this.marcasDisponibles = [
        {name: "Americano", value: 1.15},
        {name: "Asiático", value: 1.05},
        {name:"Europeo", value: 1.35}
    ];
}
// calculo de la cotización
Seguro.prototype.calculate = function() {
    let total;
    const base = 2000;
    if(this.marcasDisponibles[this.marca - 1]) {
        total = base * this.marcasDisponibles[this.marca - 1].value;
    } 

    // leer año
    const yearsDiff = new Date().getFullYear() - this.year;
    // Cada año que la diferencia es mayor, el costo se reduce en un 3%
    total -= yearsDiff * 0.03 * total;

    /*
        Si el seguro es básico se añade el 30%
        Si el seguro es completo se añade el 50%
    */
    if(this.tipo === "básico") {
        total *= 1.3;
    } else {
        total *= 1.5;
    }

    return total;
}
Seguro.prototype.getNameType = function() {
    return this.marcasDisponibles[this.marca - 1].name;
}

/**
 * Objeto User Interface
 */
function UI() {}
// llenar años en el select
UI.prototype.fillYears = function() {
    const   maxYear = new Date().getFullYear(),
            minYear = maxYear - 20;
    const selectYear = document.querySelector('#year');
    for (let i = maxYear; i >= minYear; i--) {
        const option = document.createElement('OPTION');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}
// muestra alertas
UI.prototype.showAlert = function(message, type) {
    const div = document.createElement('DIV');
    if(type === "error") {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = message;
    const form = document.querySelector('#cotizar-seguro');
    form.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 1500);
}
// mostrar resultado
UI.prototype.showResult = function(total, seguro) {
    const {tipo, year} = seguro;
    const resultadoDiv = document.querySelector('#resultado');

    while (resultadoDiv.querySelector('.cotizacion-resultado')) {
        resultadoDiv.querySelector('.cotizacion-resultado').remove();
    }

    // crear el resultado
    const div = document.createElement('DIV');
    div.classList.add('cotizacion-resultado', 'mt-10');
    div.innerHTML = `
        <p class="header">Tu Resumen</p>
        <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
        <p class="font-bold">Marca: <span class="font-normal">${seguro.getNameType()}</span></p>
        <p class="font-bold">Año: <span class="font-normal capitalize">${year}</span></p>
        <p class="font-bold">Tipo: <span class="font-normal">${tipo}</span></p>
    `;
    const spinner = document.querySelector('#cargando');
    spinner.style.display = "block";

    setTimeout(() => {
        spinner.style.display = "none";
        resultadoDiv.appendChild(div);
    }, 2000);
}



// instanciar UI
const userInterface = new UI();

document.addEventListener('DOMContentLoaded', () => {
    userInterface.fillYears();
    const form = document.querySelector('#cotizar-seguro');
    form.addEventListener('submit', cotizarSeguro);
});

function cotizarSeguro(e) {
    e.preventDefault();
    // leer marca seleccionada
    const marca = document.querySelector('#marca').value;

    // leer año seleccionado
    const year = document.querySelector('#year').value;
    // leer tipo cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if(marca === "" || year === "" || tipo === "") {
        userInterface.showAlert('Todos los campos son obligatorios', 'error');
        return;
    }

    userInterface.showAlert('Cargando...', 'exito');

    const seguro = new Seguro(marca, year, tipo);
    const totalAPagar = seguro.calculate();
    userInterface.showResult(totalAPagar, seguro);

}