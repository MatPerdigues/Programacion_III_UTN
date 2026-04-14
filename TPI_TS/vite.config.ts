import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        login: "src/pages/auth/login/login.html",
        registro: "src/pages/auth/registro/registro.html",
        adminHome: "src/pages/admin/home/home.html",
        clientHome: "src/pages/client/home/home.html",
      },
    },
  },
});