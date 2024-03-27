/**
 * SYMBOLS
 */

const sim = Symbol({hola:'mundo'});
const sim2 = Symbol(1);

console.log(sim === sim2 ? 'iguales':'diferentes');
console.log(sim.description);
console.log(sim.toString());
console.log(sim.valueOf());

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

persona[nombre] = 'Mauricio';
persona[apellido] = "carrillo";
persona[Symbol()] = "hola";
persona.tipo = "premium";
persona.saldo = 500;

console.log(persona);
console.log(persona.nombre);
console.log(persona[nombre]);

console.log(Object.keys(persona));

console.log([Symbol(), 1,2,3, Symbol()]);
[Symbol(), 1,2,3, Symbol()].forEach(e => console.log(e));

const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};

cliente[nombreCliente] = "Pedro";

console.log(cliente);
console.log(nombreCliente.toString())

const sym = Symbol("foo");
console.log(typeof sym); // "symbol"
const symObj = Object(sym);
console.log(typeof symObj); // "object"

console.log(sym);
console.log(symObj)
console.log(symObj.description)



const globalSym = Symbol.for('foo'); // Global symbol

console.log(Symbol.keyFor(globalSym));
// Expected output: "foo"

const localSym = Symbol(); // Local symbol

console.log(Symbol.keyFor(localSym));
// Expected output: undefined

console.log(Symbol.keyFor(Symbol.iterator));
// Expected output: undefined