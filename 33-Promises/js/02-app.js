const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log('agregando pais');
    callback();
}

function mostrarPaises() {
    console.log(paises); 
}

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises);
        
        setTimeout(() => {
            nuevoPais('México', mostrarPaises);

            setTimeout(() => {
                nuevoPais('Suiza', mostrarPaises); 
            }, 3000);
        }, 3000);
    }, 3000);
}

iniciarCallbackHell();