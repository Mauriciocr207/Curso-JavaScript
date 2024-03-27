function iniciarApp() {
    const selectCategorias = document.querySelector('#categorias');
    const resultado = document.querySelector('#resultado');
    const modal = new bootstrap.Modal('#modal', {})

    if(selectCategorias) {
        selectCategorias.addEventListener('change', seleccionarCategoria);
        obtenerCategorias();
    }

    const favoritosDiv = document.querySelector('.favoritos');
    if(favoritosDiv) {
        obtenerFavoritos();
    }

    function obtenerCategorias() {
        const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
        fetch(url)
            .then(ressponse => ressponse.json())
            .then(result => mostrarCategorias(result.categories));
    }

    function seleccionarCategoria(e) {
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;
        fetch(url)
        .then(ressponse => ressponse.json())
        .then(result => mostrarRecetas(result.meals));
    }

    function mostrarCategorias(categorias = []) {
        categorias.forEach(categoria => {
            const {strCategory: nombreCategoria} = categoria;
            const option = document.createElement('OPTION');
            option.value = nombreCategoria;
            option.textContent = nombreCategoria;
            selectCategorias.appendChild(option);
        })
    }

    function mostrarRecetas(recetas = []) {
        deleteChilds(resultado);
        const heading = document.createElement('H2');
        heading.classList.add('text-center', 'text-black', 'my-5');
        heading.textContent = recetas.length ? 'Resultados' : "No hay resultados";
        resultado.appendChild(heading);

        recetas.forEach(receta => {
            const {idMeal:id, strMeal:nombreReceta, strMealThumb:imagenReceta} = receta;
            const recetaContenedor = document.createElement('DIV');
            recetaContenedor.classList.add('col-md-4');

            const recetaCard = document.createElement('DIV');
            recetaCard.classList.add('card', 'mb-4');

            const recetaImagen = document.createElement('IMG');
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt = `Imagen de la receta ${nombreReceta}`;
            recetaImagen.src = imagenReceta;

            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');
            
            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = nombreReceta;

            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = "Ver Receta";
            recetaButton.onclick = function() {
                seleccionarReceta(id);
            }

            recetaCardBody.append(recetaHeading, recetaButton);

            recetaCard.append(recetaImagen, recetaCardBody);

            recetaContenedor.appendChild(recetaCard);

            resultado.appendChild(recetaContenedor);
        })
    }

    function seleccionarReceta(id) {
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(url)
            .then(response => response.json())
            .then(result => mostrarRecetaModal(result.meals[0]))
    }

    function mostrarRecetaModal(receta) {
        const {idMeal: id, strInstructions: instruction, strMeal: nombre, strMealThumb:imagenReceta} = receta;
        
        const modalTitle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = nombre;
        modalBody.innerHTML = `
            <img class="img-fluid" src="${imagenReceta}" alt="receta ${nombre}"> 
            <h3 class="my-3">Instrucciones</h3>
            <p>${instruction}</p>
            <h3 class="my-3">Ingredientes</h3>
        `;

        const listGroup = document.createElement('UL');
        listGroup.classList.add('list-group');

        for (let i = 1; i <= 20; i++) {
            if(receta[`strIngredient${i}`]) {
                const ingrediente = receta[`strIngredient${i}`];
                const cantidad = receta[`strMeasure${i}`];
                const ingredientLi = document.createElement('LI');
                ingredientLi.classList.add('list-group-item');
                ingredientLi.textContent = `${ingrediente} - ${cantidad}`;
                listGroup.appendChild(ingredientLi);
            }
        }
        modalBody.appendChild(listGroup);

        const btnFavorito = document.querySelector('#guardar');
        const existe = existeFavorito(id);

        const actualizarTextoBtn = (existeReceta) => {
            btnFavorito.textContent = (existeReceta ? "Eliminar" : "Guardar");
        }
        const toggleBtnClick = (existeReceta) => {
            if(existeReceta) {
                console.log(id);
                eliminarFavorito(id);
                mostrarToast('Eliminado correctamente');
                if(!selectCategorias) {
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
            } else {
                agregarFavorito({
                    idMeal: id, 
                    strInstructions: instruction, 
                    strMeal: nombre,
                    strMealThumb:imagenReceta
                });
                mostrarToast('Agregado correctamente');
            }
            actualizarTextoBtn(!existeReceta);
            btnFavorito.onclick = () => toggleBtnClick(!existeReceta);
        }

        actualizarTextoBtn(existe);
        btnFavorito.onclick = () => toggleBtnClick(existe);
        
        const btnCerrarModal = document.querySelector('#cerrar');
        btnCerrarModal.onclick = function() {
            modal.hide();
        }

        modal.show();

        return existe;        
    }

    function agregarFavorito(receta) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        let favoritosArray = [...new Set([...favoritos, receta].map(JSON.stringify))].map(JSON.parse);
        localStorage.setItem('favoritos', JSON.stringify(favoritosArray));
    }

    function eliminarFavorito(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        const nuevosFavoritos = favoritos.filter(favorito => favorito.idMeal !== id);
        console.log(nuevosFavoritos);
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }

    function existeFavorito(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        const idArray = favoritos.map(({idMeal}) => idMeal);
        return idArray.includes(id);
    }

    function mostrarToast(message) {
        const toastDiv = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');
        const toast = new bootstrap.Toast(toastDiv);
        toastBody.textContent = message;
        toast.show();
    }

    function obtenerFavoritos() {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        if(favoritos.length) {
            mostrarRecetas(favoritos);
            return;
        }

        const noResults = document.createElement('P');
        noResults.textContent = "No hay favoritos aún";
        noResults.className = "fs-4 text-center font-bold mt-5";
        resultado.appendChild(noResults);
    }

    function deleteChilds(nodeElement) {
        while (nodeElement.firstChild) {
            nodeElement.firstChild.remove();
        }
    }


}

document.addEventListener('DOMContentLoaded', iniciarApp);
