 /**
  * Object literal
  */

 const cliente = {
    nombre: 'Mauricio',
    saldo: 500
 }

 console.log(cliente, typeof cliente);

 /**
  * Object constructor
  */
 function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
 }

 const clienteNuevo = new Cliente('Mauricio', 700);

 console.log(clienteNuevo); 