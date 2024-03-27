import hola, { nombreCliente as nameCliente, ahorro, mostrarInfo, tieneSaldo, Cliente, sayHi } from "./cliente.js";
import {Empresa} from "./empresa.js";

console.log(nameCliente);
console.log(ahorro);
console.log(mostrarInfo("mau", 200));

tieneSaldo(ahorro);

const cliente = new Cliente('Mauricio', 200);
console.log(cliente);

sayHi();

const empresa = new Empresa('Electronics', 200, "electrónica");
console.log(empresa);

hola();