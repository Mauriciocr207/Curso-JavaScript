/**
 * Utilizaré promesas para manejar algunas cosas de indexDB
 * dado que varias funciones son asíncronas, a pesar de que aún
 * no se han visto promesas en el curso
 */

export class DB {
    static #db;
    static #dbName = 'DBclientes';
    static #tableName = 'clientes';
    static #fields = [
        {name:'nombre', options: {unique: false}},
        {name:'email', options: {unique: true}},
        {name:'telefono', options: {unique: false}},
        {name:'empresa', options: {unique: false}},
    ]
    static init() {
        // crear base de datos
        const crmDB = window.indexedDB.open(this.#dbName, 1);
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
            const objectStore = db.createObjectStore(this.#tableName, {
                keyPath: 'id',
                autoIncrement: true,
            });

            objectStore.createIndex('id', 'id', {unique: true});
            this.#fields.forEach(field => {
                const {name, options} = field;
                objectStore.createIndex(name, name, options);
            });
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
     * Guardar cliente
     */
    static save(cliente) {
        const transaction = this.#db.transaction([this.#tableName], 'readwrite');
        const objectStore = transaction.objectStore(this.#tableName);
        const request = objectStore.add(cliente);
        console.log(request);
        return new Promise((res, rej) => {
            transaction.oncomplete = () => res();
            transaction.onerror = (err) => rej(err);
        })
    }

    /**
     * Editar una cliente
     */
    static update(cliente) {
        const transaction = this.#db.transaction([this.#tableName], 'readwrite');
        const objectStore = transaction.objectStore(this.#tableName);
        console.log(cliente);
        const request = objectStore.put(cliente);
        console.log(request);
        return new Promise((res, rej) => {
            transaction.oncomplete = () => res();
            transaction.onerror = (err) => rej(err);
        });
    }

    /**
     * Borrar un registro
     */
    static delete(cliente) {
        const transaction = this.#db.transaction([this.#tableName], 'readwrite');
        const objectStore = transaction.objectStore(this.#tableName);
        console.log(cliente);
        const request = objectStore.delete(cliente);
        console.log(request);
        return new Promise((res, rej) => {
            transaction.oncomplete = () => res();
            transaction.onerror = (err) => rej(err);
        });
    }

    /**
     * obtener un registro
     */
    static get(id) {
        const transaction = this.#db.transaction([this.#tableName], 'readwrite');
        const objectStore = transaction.objectStore(this.#tableName);
        console.log(id);
        const request = objectStore.get(id);
        console.log(request);
        return new Promise((res, rej) => {
            transaction.oncomplete = () => res(request.result);
            transaction.onerror = (err) => rej(err);
        });
    }
    
    /**
     * Obtener todos los registros en indexDB
     */
    static selectAll() {
        const transaction = this.#db.transaction([this.#tableName], 'readwrite');
        const objectStore = transaction.objectStore(this.#tableName);
        const request = objectStore.getAll();
        console.log(request);
        return new Promise((res, rej) => {
            transaction.oncomplete = () => res(request.result);
            transaction.onerror = (err) => rej(err);
        });
    }
}