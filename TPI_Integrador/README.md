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

### 🔧 1. Clonar el repositorio

```bash
git clone <url-del-repo>
cd nombre-del-proyecto
```

---

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
│   └── assets/        # Imágenes estáticas
├── src/
│   ├── index.ts
│   ├── index.css
│   ├── data/
│   ├── utils/
│   └── pages/
│       ├── store/
│       └── auth/
```

---

## 🧠 Notas importantes

* Las imágenes se almacenan en la carpeta `public/assets` y se referencian mediante rutas absolutas (`/assets/...`) para asegurar compatibilidad tanto en desarrollo como en producción.
* Los estilos CSS se importan directamente en los archivos TypeScript usando `import './archivo.css'`, siguiendo la metodología recomendada por Vite.
* El proyecto utiliza configuración multipágina en `vite.config.ts` para gestionar múltiples archivos HTML como puntos de entrada.

---

## ✨ Estado del proyecto

Proyecto funcional en su totalidad, cumpliendo con los requisitos de un sistema básico de e-commerce y preparado para futuras mejoras como autenticación real, backend o integración con APIs.

---

## 👨‍💻 Autor

Desarrollado por Matías.
