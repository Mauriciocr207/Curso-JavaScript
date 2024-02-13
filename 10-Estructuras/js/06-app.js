const user = true;
const puedePagar = false;

if(user && puedePagar) {
    console.log('puede pagar');
} else if(!puedePagar && !user) {
    console.log('No puede pagar');
} else if(!user) {
    console.log('Inicia sesion')
} else if(!puedePagar) {
    console.log('Fondos insuficientes');
}