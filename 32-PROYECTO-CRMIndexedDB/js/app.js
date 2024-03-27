import { DB } from "./DB/db.js"
import { UI } from "./UI/UI.js";
const form = document.querySelector('#formulario');

window.onload = () => {
    DB.init()
        .then(() => UI.renderRecords())
        .catch((err) => console.error(err));
}