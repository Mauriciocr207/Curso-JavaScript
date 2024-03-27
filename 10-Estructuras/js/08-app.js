const auth = true;

if(auth) {
    console.log('autenticado');
}

const puntaje = 500;

function revisarPuntaje() {
    if(puntaje > 400) {
        console.log('Excelente!!');
        return;
    }
    
    if(puntaje > 300) {
        console.log('Buen trabajo!');
        return;
    }
}

revisarPuntaje();