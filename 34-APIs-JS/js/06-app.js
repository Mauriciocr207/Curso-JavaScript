const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart = function() {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    }

    recognition.onspeechend = function() {
        salida.innerHTML += '</br>Se dejó de grabar';
        recognition.stop();
    }

    recognition.onresult = function(e) {
        const {confidence, transcript} = e.results[0][0];
        salida.textContent = `conf: ${confidence}, has dicho: ${transcript}?`;
    }
}