initApp();
function initApp() {
    console.log('iniciando app');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('desde segunda');

    userAuth('Pablo');
}

function userAuth(user) {
    console.log('autenticando usuario...espere...');
    console.log(`usuario autenticado exitosamente: ${user}`);
}