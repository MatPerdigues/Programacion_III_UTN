

const cargarCategorias = () => {

    const lista = document.getElementById("lista-categorias");

    categorias.forEach(categoria => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = categoria;
        link.href = "#";
        item.appendChild(link);
        lista.appendChild(item);
    })

}


const cargarProductos = () => {
    const contenedorProductos = document.querySelector(".contenedor-productos");;

    productos.forEach(producto => {
        const articulo = document.createElement("article");
        articulo.className = "articulo";
        articulo.innerHTML = `
            <h3>${producto.nombre}</h3>
            <img src="${producto.imagen}" alt="Imagen de Hamburguesa">
            <p>${producto.descripcion}</p>
            <p>Precio: <strong>${producto.precio}</strong></p>
            <button>Ver Detalles</button>
            <button class="btn-carrito">Agregar al carrito</button>
        `;
        const btnCarrito = articulo.querySelector(".btn-carrito");

        btnCarrito.addEventListener('click', () => {
            alert(producto.nombre);
        });
        
        contenedorProductos.appendChild(articulo);
    })
}


document.addEventListener("DOMContentLoaded", () => {
    cargarCategorias();
    cargarProductos();
});