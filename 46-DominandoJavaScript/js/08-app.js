window.onload = () => {
    console.log('ventana lista');
}

window.nombre = "Mau";
const producto = {
    precio: 30,
    getInfo: function() {
        return `Producto ${self.nombre}, precio: ${self.precio}`;
    }
}

console.log(producto.getInfo());

console.log(this, self);
const obj = {
    type: 'object with function',
    fn: function() {
        return this;
    },
    fn2: function() {
        return function() {
            return this;
        }
    },
    fn3: () => this,
}

console.log(obj.fn());
console.log(obj.fn2()());
console.log(obj.fn3());