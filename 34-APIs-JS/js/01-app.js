const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission()
        .then(res => console.log(res))
        .catch(err => console.error(err));
})

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === "granted") {
        const notification = new Notification('Nueva notificación', {
            icon: 'img/ccj.png',
            body: 'Aprende código', 
        });
        notification.onclick = function() {
            window.open("https://google.com");
        }
    }
});