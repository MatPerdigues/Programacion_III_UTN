import { getCategories } from "../../../data/data";
import { getProducts } from "../../../data/data";
import { actualizarCantidad } from "../../../utils/storeManagement";
import type { Product } from "../../../types/Product";


if (!localStorage.getItem("productos")) {
    localStorage.setItem("productos", JSON.stringify(getProducts()));
}


const categorias = getCategories();
const productos: Product[] = JSON.parse(localStorage.getItem("productos") || "[]");
const contenedorProductos = document.querySelector(".contenedor-productos") as HTMLElement;
const tituloSecProductos = document.querySelector("#title-sec-productos") as HTMLElement;
const buscador = document.querySelector(".contenedor-buscador") as HTMLElement;
const cardProducto = document.querySelector("#cardProducto") as HTMLElement;
const btnClose = document.querySelector("#close-producto") as HTMLElement;
const cantidadProducto = document.querySelector(".cantidad-detalleProducto") as HTMLElement;
const imagen = document.querySelector("#img-cardProducto") as HTMLImageElement;
const nombreProducto = document.querySelector("#title-detalleProducto") as HTMLElement;
const precioProducto = document.querySelector("#precio-detalleProducto") as HTMLElement;
const descProducto = document.querySelector(".desripcion-detalleProducto") as HTMLElement;    
const estadoProducto = document.querySelector("#estado-detalleProducto") as HTMLElement;
const btnSumar = document.querySelector("#btnSumar") as HTMLElement;
const btnRestar = document.querySelector("#btnRestar") as HTMLElement;
const lista = document.getElementById("lista-categorias") as HTMLUListElement;
const btnAgregar = document.querySelector(".carrito-detalleProducto") as HTMLElement;
const itemProductos = document.querySelector("#liProductos") as HTMLElement;
const linkProductos = document.querySelector("#linkProductos") as HTMLAnchorElement;
const inputBuscador = document.querySelector("#input-buscador") as HTMLInputElement;
const btnBuscador = document.querySelector("#btn-buscador") as HTMLElement;
const titleProductos = document.querySelector("#title-sec-productos") as HTMLElement;
const noProducts = document.querySelector("#noProducts") as HTMLElement;
const hamburguesa = document.querySelector("#hamburguesa") as HTMLElement;
const aside = document.querySelector(".aside") as HTMLElement;
const iconoOpciones = document.querySelector("#iconoOpciones") as HTMLElement;
const listaHeader = document.querySelector("#lista-header") as HTMLElement;



btnBuscador.addEventListener("click",(e)=>{
    e.preventDefault();    
    let valorBuscado = inputBuscador.value;
    productosFilter = productos.filter(prod => prod.nombre.toLowerCase().includes(valorBuscado.toLowerCase()))
    if(productosFilter.length === 0){
        titleProductos.textContent = "";
    } else{
       titleProductos.textContent = "Resultados"; 
    }
    cargarProductos();
})




let productosFilter : Product[] = productos;
let iStock:number = 0;
let iCantidad:number = 0;
let productoActual: any = null;
let category : string;





btnSumar.addEventListener("click", () => {
    iStock = actualizarCantidad("sumar", productoActual, iStock, mostrarElementos);
});

btnRestar.addEventListener("click", () => {
    iStock = actualizarCantidad("restar", productoActual, iStock, mostrarElementos);
});

btnClose.addEventListener("click", () => {
    iStock = actualizarCantidad("anular", productoActual, iStock, mostrarElementos);
});

btnAgregar.addEventListener("click", () => {
    iStock = actualizarCantidad("agregar", productoActual, iStock, mostrarElementos);
});

hamburguesa.addEventListener("click", () => {
    aside.classList.toggle("activo");
}); 

iconoOpciones.addEventListener("click", () => {
    listaHeader.classList.toggle("activo");
}); 


const categoriaProductos = () =>{
    linkProductos.textContent = "Todos los Productos";
    linkProductos.href = "#";
    // linkProductos.classList.add("categoria-item");
    linkProductos.classList.add("categoria-link");    
    linkProductos.addEventListener("click", () => {
        category = "productos";
        // productosFilter = productos.filter(prod => prod.categorias.some(cat => cat.nombre === category));
        productosFilter = productos;
        titleProductos.textContent = "Todos los Productos";  
        cargarProductos();
        document.querySelectorAll(".categoria-item")
            .forEach(i => i.classList.remove("activo"));
        itemProductos.classList.add("activo");
    });
}



const mostrarElementos = () => {
    cardProducto.classList.toggle("activo");  
    contenedorProductos.style.display = "grid";
    tituloSecProductos.style.display = "flex";
    buscador.classList.toggle("inactivo"); 
    window.scrollTo({ top: 0, behavior: "smooth" });
    
}

const ocultarElementos = () => {
    cardProducto.classList.toggle("activo");  
    contenedorProductos.style.display = "none";
    tituloSecProductos.style.display = "none"; 
    buscador.classList.toggle("inactivo");  
    window.scrollTo({ top: 0, behavior: "smooth" });
}


const cargarCategorias = () => {    
    categorias.forEach(categoria => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = categoria.nombre;
        link.href = "#";
        item.classList.add("categoria-item");
        link.classList.add("categoria-link");    
        item.addEventListener("click", () => {
            document.querySelectorAll(".categoria-item")
                .forEach(i => i.classList.remove("activo"));
            item.classList.add("activo");
            category = categoria.nombre;
            productosFilter = productos.filter(prod => prod.categorias.some(cat => cat.nombre === category));   
            titleProductos.textContent = category;             
            cargarProductos();
        });
        item.appendChild(link);
        lista.appendChild(item);
    });
};



const cargarTarjeta = () => {    
    const idProducto = localStorage.getItem("idProducto");
    const producto = productos.find(p => p.id === Number(idProducto));  
    if (!producto) return;
    productoActual = producto;
    iStock = producto?.stock;
    iCantidad = 0;     
    imagen.src = producto.imagen;
    nombreProducto.textContent = producto.nombre;
    precioProducto.textContent = "$ " + producto.precio.toFixed(2);
    descProducto.textContent = producto.descripcion;  
    estadoProducto.textContent = "Disponible | Stock: " + iStock;
    if(producto.stock === 0){
        estadoProducto.style.backgroundColor = "rgb(192, 57, 43)";
        cantidadProducto.style.border = "1px solid lightgrey";
        estadoProducto.textContent = "Sin stock";
    } else {
        estadoProducto.style.backgroundColor = "rgb(39, 174, 96)";
        cantidadProducto.style.border = "1px solid lightgrey";
    }
};





const cargarProductos = () => {

    if (productosFilter.length === 0) {
        noProducts.style.display = "block";
        // titleProductos.textContent = "";
    } else {
        noProducts.style.display = "none";
        // titleProductos.textContent = "Resultados";
    }
    contenedorProductos.innerHTML = "";
    productosFilter.forEach(producto => {
        const estado = producto.stock > 0 ? "Disponible" : "Sin stock";
        const claseEstado = producto.stock > 0 ? "card-estado-disponible" : "card-estado-agotado";
        const categoria = producto.categorias[0].nombre;
        const articulo = document.createElement("article");
        articulo?.addEventListener("click", () => {
            localStorage.setItem("idProducto", producto.id.toString());
            ocultarElementos();
            cargarTarjeta();
        });
        articulo.className = "articulo";
        articulo.innerHTML = `
         
            <img src="${producto.imagen}" alt="Imagen de Hamburguesa" class="card-img">
            <div class="card-info">
                <h5 class="card-categoria">${categoria}</h5>
                <h3 class="card-title">${producto.nombre}</h3>
                <p class="card-descripcion">${producto.descripcion}</p>
                <div class="wrapper-precio-estado">    
                    <p class="card-precio"><strong>$ ${producto.precio.toFixed(2)}</strong></p>   
                    <div id="estadoTarjeta" class=${claseEstado}>${estado}</div>
                </div>
            </div>
        `;
        contenedorProductos.appendChild(articulo);
    })
}





categoriaProductos();
cargarCategorias();
cargarProductos();
