function descargarClientes() {
    return new Promise((res, rej) => {
        const err = false;

        setTimeout(() => {
            if(!err) {
                res('clientes descargados correctamente');
            } else {
                rej('Fallo en la conexión');
            }
        }, 5000);
    })
}

function descargarPedidos() {
    return new Promise((res, rej) => {
        const err = false;

        setTimeout(() => {
            if(!err) {
                res('pedidos descargados correctamente');
            } else {
                rej('Fallo en la conexión');
            }
        }, 3000);
    })
}

const app = async () => {
    try {
        const response = await Promise.all([descargarClientes(), descargarPedidos()]);
        const clientes = response[0];
        const pedidos = response[1];
        console.log(clientes, pedidos);
    } catch (err) {
        console.log(err);
    }
}

app();