const loadTxt = document.querySelector('#cargarTxt');

loadTxt.addEventListener('click', getData);

function getData() {
    const url = 'data/daltos.txt';
    fetch(url)
        .then(res => {
            console.log(res);
            console.log(res.status);
            console.log(res.statusText);
            console.log(res.url);
            console.log(res.type);
            if(!res.ok) {
                throw new Error('Error http, estado: ' + res.status);
            }
            return res.text();
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

/**
 * NOTA: 
 * 
 * El código no cae en el bloque catch 
 * porque la función fetch no lanza un 
 * error en caso de recibir una respuesta 
 * de estado HTTP 404 (Not Found) u otros 
 * errores de HTTP. En lugar de eso, la 
 * promesa devuelta por fetch se resolverá 
 * correctamente, incluso si la respuesta 
 * del servidor indica un error HTTP. 
 * Por lo tanto, en el caso de una URL que 
 * no existe, fetch seguirá resolviendo la 
 * promesa, pero con un objeto Response que 
 * representa la respuesta del servidor.
 */