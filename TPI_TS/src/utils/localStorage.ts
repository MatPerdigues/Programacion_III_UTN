import type { IUser } from "../types/IUser";


export const crearAdmin = () => {
    const users: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");

    const adminExists = users.some(
        (user: IUser) => user.role === "admin"
    );
    if (!adminExists) {
        users.push({
            email: "admin1@gmail.com",
            password: "admin123",
            role: "admin"
        });

    localStorage.setItem("users", JSON.stringify(users));
    }
}

export const crearCliente = (email: string, password: string) =>{
    console.log('creando cliente!');    
    const users: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.some(
            (user: IUser) => user.email === email
        );    
        if (userExists) {
            alert("El usuario ya se encuentra registrado");
            return;
        } else{
            const newUser: IUser = {
                email,
                password,
                role: "cliente"
            };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            alert("Usuario registrado correctamente!");
            window.location.href = "/src/pages/auth/login/login.html";
        }
}