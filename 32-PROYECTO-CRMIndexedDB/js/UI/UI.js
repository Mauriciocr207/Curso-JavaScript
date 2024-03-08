import { Cliente } from "../Models/Cliente.js";

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');
const empresa = document.querySelector('#empresa');
const form = document.querySelector('#formulario');

export class UI {
    static showAlert(message, type) {
        const alert = document.createElement('DIV');
        alert.className = 'px-4 py-3 rounded max-w-lg mx-auto mb-6 text-center';

        if(type === "error") {
            alert.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        } else {
            alert.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
        }

        alert.textContent = message;

        form.parentElement.insertBefore(alert, form);

        setTimeout(() => {
            alert.remove();
        }, 2000);
    }

    static renderRecords() {
        Cliente.getAll().then(clientes => {
            const listadoClientes = document.querySelector('#listado-clientes');
            clientes.forEach(cliente => {
                const {nombre, email, telefono, empresa, id} = cliente;
                listadoClientes.innerHTML += 
                    ` <tr>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                            <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                            <p class="text-gray-700">${telefono}</p>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                            <p class="text-gray-600">${empresa}</p>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                            <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                            <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900">Eliminar</a>
                        </td>
                    </tr>
                `;
            });
        })
    }

    static updateRecord() {
        
    }

    static createRecordHTML() {
        
    }

    static getAllInputsInfo() {
        return {
            nombre: nombre.value,
            email: email.value,
            telefono: telefono.value,
            empresa: empresa.value,
        };
    }
}