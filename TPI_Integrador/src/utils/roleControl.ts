import { crearAdmin } from "./usersManagement";

crearAdmin();

function controlRole() {
    const userData = JSON.parse(localStorage.getItem("userData") || "null");
    const path = window.location.pathname.toLowerCase();

    const isAdminPage = path.includes("admin");
    const isClientPage = path.includes("client");
    const isAdmin = userData?.role === "admin";
    const isLoggedIn = userData !== null;
 


    if (isAdminPage && !isAdmin) {
        window.location.href = "/pages/auth/login/login.html";
        return;
    }

    if (isClientPage && !isLoggedIn) {
        window.location.href = "/pages/auth/login/login.html";
        return;
    }
} 

controlRole();