import type { IUserData } from "../types/Rol";

export const navigate = (userData: IUserData) =>{
    if(userData.role === 'admin'){
        window.location.href = "/src/pages/admin/admin.html";
        } else {
            window.location.href = "/src/pages/store/home/home.html";
    }

}
    
            