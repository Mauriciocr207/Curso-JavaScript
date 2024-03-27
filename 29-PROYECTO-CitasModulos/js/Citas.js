export class Citas {
    static citas = [];
    
    static add(obj) {
        this.citas = [...this.citas, {
            id: Date.now(),
            ...obj,
        }];
    }

    static update(citaObj) {
        this.citas = this.citas.map((cita => cita.id === citaObj.id ? citaObj:cita));
    }

    static delete(idCita) {
        this.citas = this.citas.filter(({id}) => id !== idCita);
    }

    static getAll() {
        return this.citas;
    }

    static getById(id) {
        return this.citas.find(cita => cita.id === parseInt(id));
    }

    static validate(cita) {
        const {
            mascota, 
            propietario, 
            telefono, 
            fecha,
            hora,
            sintomas
        } = cita;
        if(mascota === "" || propietario  === "" || telefono  === "" || fecha  === "" || hora  === "" || sintomas === "") {
            return false;
        }
        return true;
    }
    
}