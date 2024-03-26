/**
 * PARTIALS Y CURRYING
 */

const suma = (a,b,c) => a+b+c;

const sumasParciales = a => {
    return (b) => {
        return (c) => suma(a,b,c)
    }
};

const first = sumasParciales(1);
const second = first(2);
const result = second(3);

/**
 * Incluso podriamos escribir:
 */
const result2 = sumasParciales(1)(2)(3);

console.log(suma(1,2,3), result, result2);

/**
 * Hagamos algo parecido a un builder
 */
const crearCasa = (color,ventanas,puertas,niveles) => {
    return `Casa de color ${color}, ${ventanas} ventanas, ${puertas} puertas, y de ${niveles} pisos`;
}
const builderCasa = (color)=>(ventanas)=>(puertas)=>(niveles)=>crearCasa(color,ventanas,puertas,niveles);

const casa = builderCasa('blanco')(5)(2)(2);

console.log(casa);