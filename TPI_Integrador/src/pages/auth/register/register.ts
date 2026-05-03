
import { crearCliente } from "../../../utils/usersManagement";

const form = document.querySelector(".form") as HTMLFormElement | null;
const inputPass = document.querySelector("#pass") as HTMLInputElement;
const validacion1 = document.querySelector("#validacion1") as HTMLElement;
const validacion2 = document.querySelector("#validacion2") as HTMLElement;
const icono1 = document.querySelector("#icono1") as HTMLElement;
const icono2 = document.querySelector("#icono2") as HTMLElement;
const validacion3 = document.querySelector("#validacion3") as HTMLElement;
const icono3 = document.querySelector("#icono3") as HTMLElement;

let mayus : boolean;
let caracter : boolean;
let longitud : boolean;


inputPass.addEventListener("input", () => {
    const valor = inputPass.value;
    mayus = /[A-Z]/.test(valor);
    caracter = /[!@#$%^&*(),.?":{}|<>]/.test(valor);
    longitud = /.{8,}/.test(valor);

    if (mayus) {
        validacion1.style.color = "green";
        icono1.innerHTML = `✔`;
        icono1.style.fontSize = "10px"
    } else {
        validacion1.style.color = "red";
        icono1.innerHTML = `❌`;
        icono1.style.fontSize = "8px"
    }

    if (caracter) {
        validacion2.style.color = "green";
        icono2.innerHTML = `✔`;
        icono2.style.fontSize = "10px"
    } else {
        validacion2.style.color = "red";
        icono2.innerHTML = `❌`;
        icono2.style.fontSize = "8px"
    }

    if (longitud) {
        validacion3.style.color = "green";
        icono3.innerHTML = `✔`;
        icono3.style.fontSize = "10px"
    } else {
        validacion3.style.color = "red";
        icono3.innerHTML = `❌`;
        icono3.style.fontSize = "8px"
    }
});




form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombreInput = document.querySelector("#nombre") as HTMLInputElement;
    const emailInput = document.querySelector("#email") as HTMLInputElement;
    const passwordInput = document.querySelector("#pass") as HTMLInputElement;

    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value.trim();
    if(mayus && caracter && longitud){
        crearCliente(nombre,email,password);
    }

});


