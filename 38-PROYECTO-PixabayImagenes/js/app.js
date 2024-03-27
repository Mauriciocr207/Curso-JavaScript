const resultado = document.querySelector("#resultado");
const form = document.querySelector("#formulario");
const paginacionDiv = document.querySelector("#paginacion");

const registrosPorPagina = 30;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {
  form.addEventListener("submit", validarFormulario);
};

function validarFormulario(e) {
  e.preventDefault();

  const terminoBusqueda = document.querySelector("#termino").value;

  if (terminoBusqueda === "") {
    mostrarAlerta("Agrega un término de búsqueda");
    return;
  }

  buscarImagenes();
}

function mostrarAlerta(message) {
  const existeAlerta = document.querySelector(".alerta");
  if (!existeAlerta) {
    const alerta = document.createElement("P");
    alerta.className =
      "alerta bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded max-w-lg mx-auto mt-6 text-center";

    alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${message}</span>
        `;

    form.parentElement.insertBefore(alerta, form);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function buscarImagenes() {
  const termino = document.querySelector("#termino").value;
  const key = "42859443-3f2aaf7f6cc82f58797b87fb2";
  const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=25$page=${paginaActual}`;

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      totalPaginas = calcularPaginas(result.totalHits);
      mostrarImagenes(result.hits);
    })
    .finally(() => {
        imprimirPaginador();
    });
}

function calcularPaginas(total) {
  return parseInt(Math.ceil(total / registrosPorPagina));
}

function* crearPaginador(total) {
  for (let i = 1; i <= total; i++) {
    yield i;
  }
}

function mostrarImagenes(imagenes) {
  while (resultado.firstChild) {
    resultado.firstChild.remove();
  }

  imagenes.forEach((imagen) => {
    const { previewURL, likes, views, largeImageURL } = imagen;

    resultado.innerHTML += `
        <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
            <div class="bg-white">
                <img src="${previewURL}" alt="" class="w-full">
                <div class="p-4">
                    <p class="font-bold">${likes} <span class="font-light">Me gusta</span></p>
                    <p class="font-bold">${views} <span class="font-light">Veces vista</span></p>

                    <a
                        class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                        href="${largeImageURL}" target="_blank" rel="noopener noreferrer">
                        Ver Imagen    
                    </a>
                </div>
            </div>
        </div>
        `;
  });
}

function imprimirPaginador() {
  iterador = crearPaginador(totalPaginas);
  console.log(totalPaginas);

  while(paginacionDiv.firstChild) {
    paginacionDiv.firstChild.remove();
  }

  while (true) {
    const { value, done } = iterador.next();
    if (done) return;

    const boton = document.createElement("A");
    boton.href = "#";
    boton.dataset.pagina = value;
    boton.textContent = value;
    boton.className =
      "siguiente bg-yellow-400 px-4 py-1 mr-2 font-bold mb-4 rounded";

    boton.onclick = () => {
      paginaActual = value;
      buscarImagenes();
    };

    paginacionDiv.appendChild(boton);
  }
}
