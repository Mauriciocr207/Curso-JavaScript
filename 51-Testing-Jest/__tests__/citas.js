import Citas from "../js/classes/Citas";

describe('probar clase citas', () => {
    const citas = new Citas();
    const citaObj = {
        id: Date.now(),
        mascota: 'Hook',
        propietario: 'Juan',
        telefono: '1232321',
        fecha: '10-12-2020',
        hora:'10:20',
        sintomas: 'Solo duerme'
    }

    test('addCita', () => {
        citas.agregarCita(citaObj);
        expect(citas).toMatchSnapshot();
    })
    
    test('editCita', () => {
        const citaActualizada = citaObj;
        citaActualizada.mascota = "Nuevo nombre de mascota";
        citas.editarCita(citaActualizada);
        expect(citas).toMatchSnapshot();
    })
    
    test('deleteCita', () => {
        citas.eliminarCita(citaObj.id);
        expect(citas).toMatchSnapshot();
    })
})