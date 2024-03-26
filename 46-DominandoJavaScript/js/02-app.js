/**
 * HOISTING
 * 
 * El motor de JS se ejecuta dos veces:
 * 
 * - Fase de Compilación -
 * En esta fase se guardan en memoria las variables
 * declaradas con var con un valor undefined y las funciones.
 * Esto comúnmente se describe como que las variables con var
 * y funciones suben al scope superior más cercano
 * 
 * - Fase de Ejecución - 
 * Es cuando JS evalúa y ejecuta el código con base al
 * entorno en donde se encuentra
 * 
 */


/**
 * Function Expression
 * 
 * Esta función declarada con var, se guarda en memoria
 * con un valor undefined.
 * 
 * Para funcinoes declaradas con let o const, estas
 * pasan a una región llamada la Temporal Dead Zone. 
 * La Temporal Dead Zone es una región del código donde
 * la variable si está declarada pero no es posible
 * acceder a ella, lo que provoca un error de tipo
 * ReferenceError
 */
console.log(typeof fnVar);
var fnVar = () => {
    console.log('hello');
}

try {
    console.log(typeof fnConst);
    const fnConst = () => {
        console.log('hola');
    }
} catch (error) {
    console.error(error);
}

try {
    console.log(typeof fnLet);
    let fnLet = () => {
        console.log('hola');
    }
} catch(err) {
    console.error(err);
}

/**
 * Function Declaration
 */
console.log(typeof fn2);
function fn2() {
    console.log('hello 2');
}