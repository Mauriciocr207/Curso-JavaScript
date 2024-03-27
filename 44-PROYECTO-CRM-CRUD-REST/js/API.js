const url = "http://localhost:4000/clientes";


/**
 * Crear nuevo cliente
 */
export const nuevoCliente = async cliente => {
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type':'application/json'
            }
        })

        window.location.href = "index.html";

    } catch (err) {
        console.log(err);
    }
}

/**
 * Obtener clientes
 */

export const obtenerClientes = async() => {
    try {
        const response = await fetch(url);
        const clientes = await response.json();
        return clientes;
    } catch (err) {
        console.log(err);
    }
}

/**
 * Eliminar clinte
 */
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log(error);
    }
}

/**
 * Obtener cliente
 */
export const obtenerCliente = async id => {
    try {
        const result = await fetch(`${url}/${id}`);
        const cliente = await result.json();
        return cliente;
    } catch (err) {
        console.log(err);
    }
}

/**
 * Actualizar cliente
 */
export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type':'application/json'
            }
        })
        window.location.href = 'index.html';
    } catch (err) {
        console.log(err); 
    }
}