let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
})

function crmDB() {
    // crear base de datos
    let crmDB = window.indexedDB.open('crm', 1);
    console.log(crmDB);
    // SI hay error
    crmDB.onerror = function() {
        console.log('error en db');
    };
    // si se creó bien
    crmDB.onsuccess = function() {
        console.log('Éxito al crear la db');

        DB = crmDB.result;
    };

    /**
     * 
     * Configuración de la db
     * 
     * onupgradeneeded sólo se ejecuta 
     * una vez que se crea la db
     */
    crmDB.onupgradeneeded = function(e) {
        // crear tablas
        const db = e.target.result;
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true,
        });

        objectStore.createIndex('nombre', 'nombre', {unique:false});
        objectStore.createIndex('email', 'email', {unique:true});
        objectStore.createIndex('telefono', 'telefono', {unique:false});
        
        console.log('una vez');

    }
}

function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite');
    transaction.oncomplete = function() {
        console.log('Transacción completada');
    }

    transaction.onerror = function() {
        console.log('Hubo un error en la transacción');
    }

    const objectStore = transaction.objectStore('crm');

    const cliente = {
        telefono: 1232132,
        nombre: 'Mauricio',
        email: 'fakemail@mail.com'
    };

    const petición = objectStore.add(cliente);
    console.log(petición);
}