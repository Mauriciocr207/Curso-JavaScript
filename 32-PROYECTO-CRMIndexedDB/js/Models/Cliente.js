import { DB } from "../DB/db.js";

export class Cliente {
    static add(cliente) {
        return DB.save(cliente);
    }

    static update(cliente) {
        return DB.update(cliente);
    }

    static delete(cliente) {
        return DB.delete(cliente);
    }

    static get(id) {
        return DB.get(id);
    }

    static getAll() {
        return DB.selectAll();
    }

    static validate(cliente) {
        const {
            nombre,
            email,
            telefono,
            empresa,
        } = cliente;
        if(nombre === "" || email  === "" || telefono  === "" || empresa  === "") {
            return false;
        }
        return true;
    }
    
}