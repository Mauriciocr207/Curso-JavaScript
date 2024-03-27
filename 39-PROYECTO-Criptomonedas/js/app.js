const criptoSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const form = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const busqueda = {
    moneda: "",
    criptomoneda: "",
};

const obtenerCriptos = criptomonedas => new Promise(res => {
    res(criptomonedas);
})

document.addEventListener('DOMContentLoaded', () => {
    getCriptos();
    form.addEventListener('submit', submitForm);
    form.addEventListener('change', leerValor);
});

function getCriptos() {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

    fetch(url)
        .then(response => response.json())
        .then(({Data}) => {
            selectCriptos(Data);
        });
}

function selectCriptos(criptomonedas) {
    criptomonedas.forEach(cripto => {
        const {CoinInfo: {FullName, Name}} = cripto;
        const option = document.createElement('OPTION');
        option.value = Name;
        option.textContent = FullName;
        criptoSelect.appendChild(option);        
    });
}

function leerValor(e) {
    e.preventDefault(); 
    busqueda[e.target.name] = e.target.value;
}

function submitForm(e) {
    e.preventDefault();

    const {moneda, criptomoneda} = busqueda;

    if(moneda === "" || criptomoneda === "") {
        mostrarAlerta('Todos los campos son obligatorios');
        return;
    }

    consultar();
    
}

function consultar() {
    const {moneda, criptomoneda} = busqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();
    fetch(url)
        .then(response => response.json())
        .then(cotizacion => {
            mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
        });
}

function mostrarCotizacionHTML(cotizacion) {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion;
    const precio = document.createElement('P');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

    

    const precioAlto = document.createElement('P');
    precioAlto.innerHTML = `<p>Precio más alto del día: <span>${HIGHDAY}</span></p>`;

    

    const precioBajo = document.createElement('P');
    precioBajo.innerHTML = `<p>Precio más bajo del día: <span>${LOWDAY}</span></p>`;

    

    const ultimasHoras = document.createElement('P');
    ultimasHoras.innerHTML = `<p>Variación útimas 24 horas|: <span>${CHANGEPCT24HOUR}</span></p>`;

    

    const ultimaActualizacion = document.createElement('P');
    ultimaActualizacion.innerHTML = `<p>Última actualización: <span>${LASTUPDATE}</span></p>`;

    


    limpiarHTML();
    resultado.append(precio, precioAlto, precioBajo, ultimasHoras, ultimaActualizacion);
}

function mostrarAlerta(message) {

    const existeError = document.querySelector('.error');

    if(!existeError) {
        const div = document.createElement('DIV');
        div.classList.add('error');

        div.textContent = message;

        form.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 3000);
    }
}

function mostrarSpinner() {
    limpiarHTML();

    const spinner = document.createElement('DIV');
    spinner.classList.add('spinner');
    spinner.innerHTML = `
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>`;

    resultado.appendChild(spinner);
}

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.firstChild.remove();
    }
}