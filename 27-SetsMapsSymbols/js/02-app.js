/**
 * WEAK SET
 */

const weakSet = new WeakSet();

// al weakset solo se le pueden pasar objetos

const cliente = {
    nombre: 'juan',
    saldo: 123,
}

weakSet.add(cliente);
console.log(weakSet);
// weakSet.add(3);

console.log(weakSet.has(cliente));
weakSet.delete(cliente);
console.log(weakSet);

// weak set no son iterables