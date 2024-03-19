const paises = [];


/**
 * Mejorando el callback hell
 */

const nuevoPais = (pais) => new Promise((res) => {
    setInterval(() => {
        paises.push(pais);
        res(`Agregando ${pais}`);
    }, 2000);
})

nuevoPais('Alemania')
    .then(res => {
        console.log(res);
        return nuevoPais('Francia');
    })
    .then(res => {
        console.log(res);
        return nuevoPais('Inglaterra');
    })
    .then(res => console.log(res));