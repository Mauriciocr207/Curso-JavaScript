const resultado = document.querySelector('#resultado');
const form = document.querySelector('#formulario');
const container = form.parentElement;

window.addEventListener('DOMContentLoaded', listeners);

function listeners() {
    form.addEventListener('submit', searchWeather);
}

function searchWeather(e) {
    e.preventDefault();

    const ciudad = document.querySelector('#ciudad');
    const pais = document.querySelector('#pais');

    if(inputIsEmpty(ciudad) && inputIsEmpty(pais)) {
        showError('Todos los campos son obligatorios');
        return;
    }

    requestAPI(ciudad.value, pais.value);
}

function inputIsEmpty(input) {
    if(input.value === "") {
        return true;
    }
    return false;
}

function showError(message) {
    const alert = document.querySelector('.alerta');

    if(!alert) {
        const newAlert = document.createElement('DIV');
        newAlert.className = "alerta bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto mt-6 text-center";

        newAlert.innerHTML = `
            <strong class="font-bold">Error</strong>
            <span class="block">${message}</span>
        `;

        container.insertBefore(newAlert, form);
        
        setTimeout(() => {
            newAlert.remove();
        }, 2000);
    }

    return;
}

function requestAPI(ciudad, pais) {
    
    const apiID = "06edf9348e05ce56ec5fcbeb56970765";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiID}`;

    fetch(url) 
        .then(res => {
            if(!res.ok) {
                if(res.status === 404) {
                    showError('Ciudad no encontrada');
                    return;
                }

                showError('Error inesperado');
                return;
            }
            form.querySelector('[type="submit"]').value = "cargando...";
            runLoader(true);
            return res.json();
        })
        .then((data) => {
            runLoader(false);
            form.querySelector('[type="submit"]').value = "OBTENER CLIMA";
            renderClimateHTML(data);
        })
        .catch(() => showError('No se pudo realizar la solicitud'));
}

function renderClimateHTML(data) {
    cleanHTML();
    const {name, main: {temp, temp_max, temp_min}} = data;

    const tempCelcius = kelvinToCelsius(temp);
    const tempMaxCelcius = kelvinToCelsius(temp_max);
    const tempMinCelcius = kelvinToCelsius(temp_min);

    const actual = document.createElement('P');
    actual.innerHTML = `${tempCelcius} &#8451`;
    actual.classList.add('font-bold', 'text-6xl');

    const nameCity = document.createElement('P');
    nameCity.textContent = `Clima en ${name}`;
    nameCity.classList.add('font-bold', 'text-6xl');

    const tempMax = document.createElement('P');
    tempMax.innerHTML = `Máx: ${tempMaxCelcius} &#8451`;
    tempMax.classList.add('text-xl');

    const tempMin = document.createElement('P');
    tempMin.innerHTML = `Min: ${tempMinCelcius} &#8451`;
    tempMin.classList.add('text-xl');

    const resultadoDiv = document.createElement('P');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.append(nameCity, actual, tempMax, tempMin);
    resultado.appendChild(resultadoDiv);
}
  
const kelvinToCelsius = grados => (grados - 273.15).toFixed(2);

function cleanHTML() {
    while(resultado.firstChild) {
        resultado.firstChild.remove();
    }
}

function runLoader(activate) {
    const loader = document.querySelector('.spinner');
    if(activate) {
        loader.classList.remove('hidden');
    } else {
        loader.classList.add('hidden');
    }
}