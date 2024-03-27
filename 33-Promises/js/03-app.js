const promesa = new Promise((resolve, reject) => {
    const descuento = false;

    if(descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('Mo hay descuento');
    }
})

console.log(promesa);

/**
 * Valores de una promesa
 * 
 * fulfilled - El promise se cumplió
 * rejected - El promise no se cumplió
 * pending - No se ha cumplido y tampoco rechazado
 */

promesa
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('terminado'));