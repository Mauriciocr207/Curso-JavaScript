/**
 * WEAK MAP
 */

// 

const producto = {
    id: 10,
}

const weakMap = new WeakMap(); 

weakMap.set(producto, 'monitor');

console.log(weakMap);

console.log(weakMap.has(producto));
console.log(weakMap.get(producto));
console.log(weakMap.delete(producto));
console.log(weakMap);