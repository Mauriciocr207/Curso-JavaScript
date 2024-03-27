/**
 * COMPOSITION
 */
const obtenerNombre = info => ({mostrarNombre() {console.log(`Nombre: ${info.nombre}`)}});
const guardarEmail = info => ({
    agregarEmail(email){console.log(`Guardando email en: ${info.nombre}`); info.email = email;}
});
const obtenerEmail = info => ({mostrarEmail(){console.log(`Correo: ${info.email}`)}});
const obtenerEmpresa = info => ({
    mostrarEmpresa(){console.log(`Empresa: ${info.empresa}`);}
});
const obtenerPuesto = info => ({
    mostrarPuesto(){console.log(`Puesto: ${info.puesto}`);}
});






function Cliente(nombre, email, empresa) {
    let info = {nombre, email, empresa};

    return Object.assign(
        info, 
        obtenerNombre(info), 
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    );
}
function Empleado(nombre, email, puesto) {
    let info = {nombre, email, puesto};
    return Object.assign(
        info, 
        obtenerNombre(info), 
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    );
}





const cliente = Cliente('Juan', null, 'askjdnakjsd');
const empleado = Empleado('Mauricio', 'hey@hey.com', 'programador');

cliente.mostrarNombre();
cliente.agregarEmail('asdasd@asdkjas.com');
empleado.agregarEmail('ajksd@asdsad.com');
empleado.mostrarNombre();
cliente.mostrarEmail();
cliente.mostrarEmpresa();
empleado.mostrarPuesto();