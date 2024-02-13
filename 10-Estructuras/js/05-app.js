// Switch

const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        pagar();
        break;
    case 'tarjeta':
        console.log('pago con tarjeta');
        break;
    case 'cheque':
        console.log('pago con cheque');
        break;
    default:
        console.log('Método no soportado o no seleccionado');
        break;
}

function pagar() {
    console.log('pagando...');
}