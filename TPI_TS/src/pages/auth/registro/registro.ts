import { crearCliente } from "../../../utils/localStorage";
const form = document.querySelector(".form") as HTMLFormElement | null;

form?.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("SUBMIT FUNCIONA");

    const emailInput = document.querySelector("#email") as HTMLInputElement;
    const passwordInput = document.querySelector("#pass") as HTMLInputElement;

    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value.trim();

    crearCliente(email,password);
});


