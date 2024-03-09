import { Cliente } from "./cliente.js";

export class Empresa extends Cliente {
    constructor(nombre, ahorro, tipo) {
        super(nombre, ahorro);
        this.tipo = tipo;
    }
}