// variables
const shoppingCart = document.querySelector('#carrito');
const containerCart = document.querySelector('#lista-carrito tbody');
const cleanCartBtn = document.querySelector('#vaciar-carrito');
const courseList = document.querySelector('#lista-cursos');
let courses = [];

loadListeners();
function loadListeners() {
    courseList.addEventListener('click', addCourse);
    shoppingCart.addEventListener('click', deleteCourse);
    cleanCartBtn.addEventListener('click', () => {
        courses = [];
        cleanCartHTML();
    });
}

// funciones
function addCourse(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')) {
        const cardSelected = e.target.parentElement.parentElement;
        addDataCourse(cardSelected);
        renderCartHTML();
    }
}

function deleteCourse(e) {
    if(e.target.classList.contains('borrar-curso')) {
        const idCourse = e.target.getAttribute('data-id');
        courses = courses.filter(course => course.id !== idCourse);
        renderCartHTML();
    }
}

// lee contenido del html
function addDataCourse(parent) {
    const idCourse = parent.querySelector('a').getAttribute('data-id');

    if(courses.some(course => course.id === idCourse)) {
        courses.find(course => course.id === idCourse).quantity += 1;
    } else {
        const newCourse = {
            id: idCourse,
            img: parent.querySelector('img').src,
            title: parent.querySelector('.info-card h4').textContent,
            teacher: parent.querySelector('.info-card p').textContent,
            price: parent.querySelector('.info-card .precio span').textContent,
            quantity: 1,
        }

        courses.push(newCourse);
    }
}

function renderCartHTML() {
    cleanCartHTML();

    courses.forEach(course => {
        const {img, title, price, quantity, id} = course;
        const row = document.createElement('TR');
        row.innerHTML = `
            <td><img src="${img}" width="100"></td>
            <td>${title}</td>
            <td>${price}</td>
            <td>${quantity}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `

        // Agregar el html del carrito al tbody
        containerCart.appendChild(row);
    })
}

function cleanCartHTML() {
    // forma lenta
    // containerCart.innerHTML = "";

    // forma más eficiente
    while(containerCart.firstChild) {
        containerCart.firstChild.remove();
    }
}