console.log('primero');

setTimeout(() => {
    console.log('segundo');
}, 0);

console.log('tercero');

setTimeout(() => {
    console.log('cuarto');
}, 0);

new Promise(function(res) {
    res('quinto');
}).then(console.log);

console.log('sexto');

function hola() {
    console.log('septimo');
}
hola();