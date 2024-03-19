const url = "https://picsum.photos/list";


document.addEventListener('DOMContentLoaded', obtenerDatos2);

function obtenerDatos() {
    fetch(url)
        .then(res => res.json())
        .then(result => console.log(result))
        .catch(err => console.log(err));
}

async function obtenerDatos2() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}