const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);
console.log(encabezado.innerText); // retorna el texto. Pero, si en css - visibility:hidden; no lo va a encontrar
console.log(encabezado.textContent); // retorna el texto del contenedor
console.log(encabezado.innerHTML); // retorna el html

const nuevoHeading = 'Nuevo heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;
console.log(encabezado);

const imagen = document.querySelector('.card img');
console.log(imagen);
imagen.src = 'img/hacer2.jpg';