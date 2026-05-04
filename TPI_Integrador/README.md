# 🍔 Food Store

## 📌 Descripción

**Food Store** es una aplicación web de e-commerce desarrollada con **Vite, TypeScript, HTML y CSS**, que permite a los usuarios explorar productos, filtrarlos por categoría, buscarlos y gestionar un carrito de compras.

El proyecto implementa una arquitectura multipágina (MPA), donde cada sección (inicio, tienda, carrito y registro) funciona como una página independiente, optimizada mediante el sistema de build de Vite.

Entre sus principales funcionalidades se destacan:

* Visualización de productos dinámicos
* Filtrado por categorías
* Búsqueda de productos
* Vista detallada de cada producto
* Gestión de carrito de compras
* Persistencia de datos mediante `localStorage`
* Interfaz responsive

---

## ⚙️ Tecnologías utilizadas

* Vite
* TypeScript
* JavaScript
* HTML5
* CSS3

---

## 🚀 Instrucciones para ejecutar el proyecto


---


🔧 1. Descargar y descomprimir

Descargar el archivo .zip del proyecto y descomprimirlo en una carpeta local.

### 📦 2. Instalar dependencias

```bash
npm install
```

---

### 💻 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

Luego abrir en el navegador:

```
http://localhost:5173/
```

---

### 🏗️ 4. Generar build de producción

```bash
npm run build
```

Esto generará la carpeta `/dist` con la aplicación optimizada.

---

### 🔍 5. Previsualizar el build

```bash
npm run preview
```

Luego abrir:

```
http://localhost:4173/
```

---

## 📁 Estructura del proyecto

```
├── index.html
├── vite.config.ts
├── public/
│   └── assets/        
├── src/
│   ├── index.ts
│   ├── index.css
|   ├── global.d.ts
│   ├── data/
│   ├── utils/
│   ├── types/
│   └── pages/
│       ├── store/
│       └── auth/
```

---

## 🧠 Notas importantes

* Las imágenes se almacenan en la carpeta `public/assets` y se referencian mediante rutas absolutas (`/assets/...`) para asegurar compatibilidad tanto en desarrollo como en producción.
* El proyecto utiliza configuración multipágina en `vite.config.ts` para gestionar múltiples archivos HTML como puntos de entrada.

---


## 👨‍💻 Autor

Matías G. Perdigués.
