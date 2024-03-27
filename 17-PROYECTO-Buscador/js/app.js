const transmisionContainer = document.querySelector('#transmision');
const puertasContainer = document.querySelector('#puertas');
const maxContainer = document.querySelector('#maximo');
const minContainer = document.querySelector('#minimo');
const marcaContainer = document.querySelector('#marca');
const yearContainer = document.querySelector('#year');
const resultContainer = document.querySelector('#resultado');
const form = document.querySelector('#buscador');
const filterData = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

document.addEventListener('DOMContentLoaded', app);

function app() {
    renderCars(autos);
    loadYears();
    form.addEventListener('change', handleFormClick);
}

function renderCars(cars = []) {
    while (resultContainer.firstChild) {
        resultContainer.firstChild.remove();
    }
    cars.forEach(car => {
        const {marca, modelo, year, puertas, transmision, precio, color} = car;
        const carHTML = document.createElement('P');

        carHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} puertas - Transmisión: ${transmision} - preico: ${precio} - color: ${color}`;

        resultContainer.appendChild(carHTML);
    })

    if(cars.length === 0) {
        const noResult = document.createElement('P');

        noResult.textContent = "No se encontraron resultados";

        resultContainer.appendChild(noResult);
    }
}

function handleFormClick(e) {
    filterData[e.target.id] = e.target.value;
    const filteredCars = filterCars();
    renderCars(filteredCars);
}

function filterCars() {
    const keys = Object.keys(filterData);
    let cars = autos;
    keys.forEach(key => {
        if(filterData[key]) {
            cars = cars.filter(car => {
                if(key === 'minimo') {
                    return car.precio >= parseInt(filterData.minimo);
                }
                if(key === 'maximo') {
                    return car.precio <= parseInt(filterData.maximo);
                }
                return car[key] == filterData[key];
            })
        }
    })
    return cars;
}

function loadYears() {
    const maxYear = new Date().getFullYear();
    const minYear = maxYear - 10;

    for (let year = maxYear; year >= minYear; year--) {
        const optionYear = document.createElement('OPTION');
        optionYear.textContent = `${year}`;
        yearContainer.appendChild(optionYear);
    }
}