// EVENTOS DE SCROLL

window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    if(ubicacion.top < 500) {
        console.log('el elemento ya está visible');
    } else {
        console.log('scrollea aún más');
    }
})