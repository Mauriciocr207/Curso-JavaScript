/**
 * CLOSURES
 */
const cliente = "Mauricio";

function showClient() {
    const cliente ="Pablo";
    console.log(cliente);
}

// console.log(cliente);

showClient();

const getClient = () => {
    const nombre = "Juan";

    function showName() {
        return nombre;
    }

    return showName;
}

const client = getClient();

console.log(client());