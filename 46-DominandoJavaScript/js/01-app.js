/**
 * SCOPE
 * 
 * El alcance de una variable
 */

const cliente = "Mau"; //-> variable en scope global

function showCliente() {
    const cliente = "Nuevo cliente"; //->variable con alcance dentro de esta función
    console.log(cliente);
}

showCliente();

const login = true;

function clienteLogueado() {
    const cliente = "Juan";
    console.log(cliente);

    if(login) {
        const cliente = "Admin";
        console.log(cliente);
    }
}

clienteLogueado();