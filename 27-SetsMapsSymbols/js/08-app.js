const arr = ['hola','mundo','hol2a','mundo2'];
const set = new Set([1,2,3,4]);
const map = new Map();
map.set('nombre', 'mau');
map.set('profesion', 'dev');

/**
 * DEFAULT ITERADOR BY TYPE
 */
for(let key of arr) {
    console.log(key);
}
for(let key of set) {
    console.log(key);
}
for(let key of map) {
    console.log(key);
}

console.log('--------------------------------');


/**
 * KEYS ITERATOR
 */
for(let key of arr.keys()) {
    console.log(key);
}
for(let key of set.keys()) {
    console.log(key);
}
for(let key of map.keys()) {
    console.log(key);
}

console.log('--------------------------------');

/**
 * ENTRIES ITERATOR
 */
for(let entry of arr.entries()) {
    console.log(entry);
}
for(let entry of set.entries()) {
    console.log(entry);
}
for(let entry of map.entries()) {
    console.log(entry);
}

console.log('--------------------------------');

/**
 * VALUES ITERATOR
 */
for(let value of arr.values()) {
    console.log(value);
}
for(let value of set.values()) {
    console.log(value);
}
for(let value of map.values()) {
    console.log(value);
}