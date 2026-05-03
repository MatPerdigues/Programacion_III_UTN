export interface IUser {
  nombre: string,
  email: string;
  password: string;
  role: "admin" | "cliente";
}