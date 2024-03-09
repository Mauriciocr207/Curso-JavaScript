function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const cliente = new Cliente("Juan", 500);

function formatearCliente(cliente) {
  const { nombre, saldo } = cliente;
  return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(cliente) {
  const { nombre, saldo, categoria } = cliente;
  return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría ${categoria} `;
}

console.log(formatearCliente(cliente));

function Empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}

const empresaNueva = new Empresa('Semiconductors', 4000, 'La creación del led azul');

console.log(formatearEmpresa(empresaNueva));