/**
 * MAPS
 */

// son listas de llave y valor

const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'premium');
cliente.set('saldo', 300);
cliente.set([0], 1000);
cliente.set(true, 'es true');

console.log(cliente);
console.log(cliente.size);
console.log(cliente.size);
console.log(cliente.has('nombre'));
console.log(cliente.get('nombre'));
cliente.delete('saldo');
console.log(cliente.has('saldo'));
console.log(cliente.get('saldo'));

cliente.clear();

console.log(cliente);

const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);
paciente.set('obj', {hola:'mundo'});
console.log(paciente);

paciente.forEach(el => console.log(el));

paciente.set('nuevo map', new Map([['hola', 'mundo']]));
console.log(paciente);