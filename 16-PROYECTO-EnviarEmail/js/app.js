document.addEventListener('DOMContentLoaded', appEmailSender);
const inputEmail = document.querySelector('#email');
const inputAsunto = document.querySelector('#asunto');
const inputMensaje = document.querySelector('#mensaje');
const inputDestinatarioExtra = document.querySelector('#cc');
const form = document.querySelector('#formulario');
const btnSubmit = document.querySelector('#formulario button[type="submit"]');
const btnReset = document.querySelector('#formulario button[type="reset"]');
const spinner = document.querySelector('.spinner');
let requiredInputs;
let inputsRegistered = [];
const validationRules = {
    empty: (input) => {
        return  {
            passed: input.value.trim() !== "",
            message: "Este campo es obligatorio"
        }
    },
    email: (input) => {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return {
            passed: regex.test(input.value) || input.value === "",
            message: "Email inválido"
        }
    }
}
const inputsAndRules = [
    {input: inputEmail, rules: ["empty", "email"], required: true},
    {input: inputAsunto, rules: ["empty"], required: true},
    {input: inputMensaje, rules: ["empty"], required: true},
    {input: inputDestinatarioExtra, rules: ["email"], required: false},
]

/**
 * Application root
 */
function appEmailSender() {
    inputsAndRules.forEach(element => {
        const {input, rules, required} = element;
        setRules(input, rules, required);
    });

    requiredInputs = document.querySelectorAll('input[required],textarea[required]');

    form.addEventListener('submit', e => {
        e.stopPropagation();
        e.preventDefault();
        requiredInputs.forEach(input => handleRules(input, ["empty"]));
        const validForm = !inputsRegistered.includes(false)
        handleSubmitForm(validForm);
    });

    btnReset.addEventListener('click', (e) => {
        e.preventDefault();
        form.reset();
        requiredInputs.forEach(input => handleRules(input, ["empty"]));
    })
}

/**
 * FUNCTIONS
 */

function setRules(input, rules = [], required) {
    input.required = required;
    registerInput(input, required);
    function eventHandler(e) {
        e.stopPropagation();
        handleRules(input, rules)
    }

    input.addEventListener('input', eventHandler);
}

function handleRules(input, rules) {
    validateRules(input, rules);
    const allInputsValid = !inputsRegistered.includes(false);
    // enable submit button only if all input are valid
    enableSubmitBtn(allInputsValid);
}

function validateRules(input, rules) {
    const inputId = input.getAttribute('data-validation-id');
    try {
        rules.forEach(rule => {
            const result = validationRules[rule](input);
            if(!result.passed) {
                showAlert(input, result.message);
                throw Exception;
            } else {
                removeAlert(input);
            }
        })
        inputsRegistered[inputId] = true;
    } catch (Exception) {
        inputsRegistered[inputId] = false;
    }
}

function registerInput(input, required) {
    const inputId = inputsRegistered.length;
    input.setAttribute('data-validation-id', inputId);
    inputsRegistered.push(!required);
}

/**
 * Alerts
 */

function showAlert(input, message) {
    removeAlert(input);
    const alertMessage = document.createElement('DIV');
    alertMessage.innerHTML = message;
    alertMessage.classList.add('alertMessage');
    const alertIcon = document.createElement('I');
    alertIcon.classList.add('alertIcon', 'fa-solid', 'fa-circle-exclamation');

    input.after(alertMessage, alertIcon);
}

function removeAlert(input) {
    const parent = input.parentElement;
    const alertMessage = parent.querySelector('.alertMessage');
    const alertIcon = parent.querySelector('.alertIcon');

    if(alertMessage && alertIcon) {
        alertMessage.remove();
        alertIcon.remove();
    }
}

function showSuccessAlert() {
    const alert = document.createElement('DIV');
    alert.classList.add('form-success');
    alert.innerHTML = "Enviado correctamente";

    form.after(alert);
}

function removeSuccessAlert() {
    document.querySelector('.form-success').remove();
}

function enableSubmitBtn(enable) {
    btnSubmit.disabled = !enable;
    if(enable) {
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.style.cursor = "pointer";
    }
    else {
        btnSubmit.classList.add('opacity-50');
        btnSubmit.style.cursor = "not-allowed";
    }
}

/**
 * Success form
 */
function handleSubmitForm(validForm) {
    if(validForm) {
        spinner.classList.remove('hidden');
        setTimeout(() => {
            spinner.classList.add('hidden');
            form.reset();
            enableSubmitBtn(false);
            showSuccessAlert();
            setTimeout(() => {
                removeSuccessAlert();
            }, 1000);
        }, 1500);
    } else {
        spinner.classList.add('hidden');
    }
}