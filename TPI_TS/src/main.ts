import { crearAdmin } from "./utils/localStorage";

crearAdmin();

function controlRole() {
    const userData = JSON.parse(localStorage.getItem("userData") || "null");
    const path = window.location.pathname;  
    const isAdminPage = path.toLowerCase().includes("admin");
    const isAdmin = userData?.role === "admin"; 
    const isClientPage = path.toLowerCase().includes("client");
    const isUser = userData;
    if (isAdminPage && !isAdmin) {    
      window.location.href = "/src/pages/auth/login/login.html";
    }

    if(isUser === null && isClientPage){
      window.location.href = "/src/pages/auth/login/login.html";
    }
}

controlRole();