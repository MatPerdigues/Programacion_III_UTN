import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // 👈 usar "main", no "index"
        auth: resolve(__dirname, 'src/pages/auth/register/register.html'),
        home: resolve(__dirname, 'src/pages/store/home/home.html'),
        cart: resolve(__dirname, 'src/pages/store/cart/cart.html'),
      },
    },
  },
  base: './',
});




