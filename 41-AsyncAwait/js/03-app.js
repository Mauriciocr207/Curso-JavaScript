function descargarClientes() {
    return new Promise((res, rej) => {
        const err = false;

        setTimeout(() => {
            if(!err) {
                res('Descargado correctamente');
            } else {
                rej('Fallo en la conexión');
            }
        }, 2000);
    })
}

// function declaration
async function ejecutar() {
    try {
        console.log(1+1);
        const response = await descargarClientes();
        console.log(2+2);
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

// function expression
const ejecturar2 = async() => {
    try {
        console.log(1+1);
        const response = await descargarClientes();
        console.log(2+2);
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}
ejecutar();