const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0',
}

// for (const prop in automovil) {
//     console.log(automovil[prop]);
// }

for( const [prop, value] of Object.entries(automovil) ) {
    console.log(prop, value);
}