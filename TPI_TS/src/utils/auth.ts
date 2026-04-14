import type { IUser } from "../types/IUser";
import type { IUserData } from "../types/Rol";
import { navigate } from "./navigate";

export const checkUser = (correo: string, clave: string) => {
    const users: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");
    const userReg = users.find((user: IUser) => user.email === correo && user.password === clave); 
    if(!userReg){
        alert("Por favor, revisá los datos ingresados.")
        return;
        } else {          
            const userData: IUserData = {
                correo: userReg.email,
                role: userReg.role,
                loggedIn: true
            };
            
            localStorage.setItem("userData", JSON.stringify(userData));

            navigate(userData);
            
/*             if(userData.role === 'admin'){
                window.location.href = "/src/pages/auth/registro/registro.html";
            } else {
                window.location.href = "/src/pages/client/client.html";
            } */
        }
}