/**
 * Utilizaré promesas para manejar algunas cosas de indexDB
 * dado que varias funciones son asíncronas, a pesar de que aún
 * no se han visto promesas en el curso
 */

export class DB {
    static #db;
    static init() {
        // crear base de datos
        const crmDB = window.indexedDB.open('DBCitas', 1);
        /**
         * 
         * Configuración de la db
         * 
         * onupgradeneeded sólo se ejecuta 
         * una vez que se crea la db
         */
        crmDB.onupgradeneeded = (e) => {
            // crear tablas
            const db = e.target.result;
            const objectStore = db.createObjectStore('citas', {
                keyPath: 'id',
                autoIncrement: true,
            });

            objectStore.createIndex('mascota', 'mascota', {unique: false});
            objectStore.createIndex('propietario', 'propietario', {unique: false});
            objectStore.createIndex('telefono', 'telefono', {unique: false});
            objectStore.createIndex('fecha', 'fecha', {unique: false});
            objectStore.createIndex('hora', 'hora', {unique: false});
            objectStore.createIndex('sintomas', 'sintomas', {unique: false});
            objectStore.createIndex('created', 'created', {unique: false});
        }

        return new Promise((res, rej) => {
            /**
             * Si hay un error en la creación de la db
             */
            crmDB.onerror = (error) => {
                rej(error);
            };
            
            /**
             * DB creada exitosamente
             */
            crmDB.onsuccess = () => {
                this.#db = crmDB.result;
                res()
            };
        })
    }

    /**
     * Guardar cita
     */
    static save(cita) {
        const transaction = this.#db.transaction(['citas'], 'readwrite');
        const objectStore = transaction.objectStore('citas');
        const request = objectStore.add(cita);
        console.log(request);
        return new Promise((res, rej) => {
            transaction.oncomplete = () => res();
            transaction.onerror = (err) => rej(err);
        })
    }

    /**
     * Editar una cita
     */
    static update(cita) {
        const transaction = this.#db.transaction(['citas'], 'readwrite');
        const objectStore = transaction.objectStore('citas');
        console.log(cita);
        const request = objectStore.put(cita);
        console.log(request);
        return new Promise((res, rej) => {
            transaction.oncomplete = () => res();
            transaction.onerror = (err) => rej(err);
        });
    }

    /**
     * Borrar una cita
     */
    static delete(cita) {
        const transaction = this.#db.transaction(['citas'], 'readwrite');
        const objectStore = transaction.objectStore('citas');
        console.log(cita);
        const request = objectStore.delete(cita);
        console.log(request);
        return new Promise((res, rej) => {
            transaction.oncomplete = () => res();
            transaction.onerror = (err) => rej(err);
        });
    }
    
    /**
     * Obtener todos los registros en indexDB
     */
    static selectAll() {
        const transaction = this.#db.transaction(['citas'], 'readwrite');
        const objectStore = transaction.objectStore('citas');
        const request = objectStore.getAll();
        console.log(request);
        return new Promise((res, rej) => {
            transaction.oncomplete = () => res(request.result);
            transaction.onerror = (err) => rej(err);
        });
    }
}