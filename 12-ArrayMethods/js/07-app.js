const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

/**
 * Method: concat
 * 
 * Concatenar arreglos
 */
const res = meses.concat(meses2, meses3);
console.log(res);

/**
 * Spread operator
 */
const res2 = [...meses, ...meses2];
console.log(res2);