
import { checkUser } from "../../../utils/auth";

const formLogin = document.querySelector("form") as HTMLFormElement;
const form_registro = document.querySelector("#form_registro") as HTMLHeadingElement; 

formLogin?.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailLogin = document.querySelector("#emailLogin") as HTMLInputElement;
    const passwordLogin = document.querySelector("#passLogin") as HTMLInputElement;
    const correo = emailLogin.value.trim().toLowerCase();
    const clave = passwordLogin.value.trim();
    checkUser(correo,clave);
})

form_registro?.addEventListener("click",()=>{
    window.location.href = "/src/pages/auth/registro/registro.html";
})