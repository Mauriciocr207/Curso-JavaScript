(() => {
    // Inicializar una variable con var
    var producto = 'Monitor';
    console.log(producto);
    // Las variables se pueden reasignar
    producto = 'Monitor de 19"';
    console.log(producto);
    // JavaScript es un lenguaje de tipo dinámico, sin tipado
    producto = 20;
    console.log(producto);

    // Inicializar una variable sin valor
    var disponible;
    disponible = true;
    disponible = false;

    // Iniciar múltiples variables
    var categoria = "computadoras", 
        marca = "Huawei", 
        calificacion = 5;

        
})();