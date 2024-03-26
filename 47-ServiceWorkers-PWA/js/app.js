if("serviceWorker" in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(registrado => console.log('registrado correctamente: ', registrado))
        .catch(err => console.log('falló la instalacón ', err));
} else {
    console.log('service workers no soportados');
}