// variables
const form = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
const textArea = document.querySelector('#tweet');
let tweets = [];

// event listeners
document.addEventListener('DOMContentLoaded', app);
function eventListeners() {
    form.addEventListener('submit', addTweet);
}

// funciones

/**
 * Principal function
 */
function app() {
    eventListeners();
    tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    showTweets();
}
// ---------------------------------------------//
function addTweet(e) {
    e.preventDefault();

    // validacion
    if(textArea.value === "") {
        showErrMsg('No puede ir vacío');
        return;
    }

    const tweet = {
        id: Date.now(),
        value: textArea.value,
    }

    tweets = [...tweets, tweet];

    showTweets();

    form.reset();
}

function showErrMsg(error) {
    if(!document.querySelector('.error')) {
        const errMsg = document.createElement('P');
        errMsg.textContent = error;
        errMsg.classList.add('error');
    
        // insertar en el contenido
        const contenido = document.querySelector('#contenido');
        contenido.appendChild(errMsg);
    
        setTimeout(() => {
            errMsg.remove();
        }, 2000);
    }
    
}

function showTweets() {
    while (listaTweets.firstChild) {
        listaTweets.firstChild.remove();
    }

    if(tweets.length > 0) {
        tweets.forEach(tweet => {
            const li = document.createElement('LI');
            li.textContent = tweet.value;

            const btnDelete = document.createElement('A');
            btnDelete.classList.add('borrar-tweet');
            btnDelete.textContent = "X";
            btnDelete.onclick = () => {
                deleteTweet(tweet.id);
            }
            
            li.appendChild(btnDelete);
            listaTweets.appendChild(li);
        })
    }

    saveOnStorage();
}

function saveOnStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function deleteTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    localStorage.setItem('tweets', JSON.stringify(tweets));
    showTweets();
}