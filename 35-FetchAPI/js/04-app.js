const cargAPI = document.querySelector('#cargarAPI');

cargAPI.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then(res => res.json())
        .then(mostrarHTML);
}

function mostrarHTML(datos) {
    const contenido = document.querySelector('.contenido');

    datos.forEach(perfil => {
        const {author: autor, post_url: url} = perfil;
        contenido.innerHTML += `
            <p>Autor: ${autor}</p>
            <a href="${url}" target="_blank">ver imagen</a>
        `
    });
  
}