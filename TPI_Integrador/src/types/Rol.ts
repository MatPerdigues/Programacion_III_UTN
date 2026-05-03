export interface IUserData {
  correo: string;
  role: "admin" | "cliente";
  loggedIn: boolean;
}