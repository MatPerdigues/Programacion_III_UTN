import type { IProdCarrito } from "../../../types/Product";
import type { Product } from "../../../types/Product";
import { calcularTotal } from "../../../utils/cartManagement";
import { editarItem } from "../../../utils/cartManagement";
import { confirmarCompra } from "../../../utils/cartManagement";




const contenedorCarrito = document.querySelector("#itemsCarrito") as HTMLElement;
const detalleItem = document.querySelectorAll(".resumenProducto") as NodeListOf<HTMLElement>;
const varSubtotal = document.querySelector("#varSubtotal") as HTMLElement;
const productos: Product[] = JSON.parse(localStorage.getItem("productos") || "[]");
const divEnvio = document.querySelector("#totalEnvio") as HTMLElement;
const varCompra = document.querySelector(".totalCompra") as HTMLElement;
const btnBorrar = document.querySelector("#btnBorrar") as HTMLElement;
const btnPago = document.querySelector("#btnPago") as HTMLElement;
const carritoVacio = document.querySelector("#carritoVacio") as HTMLElement;
const iconoOpciones = document.querySelector("#iconoOpciones") as HTMLElement;
const listaHeader = document.querySelector("#lista-header") as HTMLElement;
const btnPagar = document.querySelector("#btnPagar") as HTMLElement;
let items: IProdCarrito[] = JSON.parse(localStorage.getItem("itemsCarrito") || "[]");



let subtotal = 0;
let totalCompra = 0;
let cantidad = 0;
let totalEnvio = 4300;



if(items.length === 0){
    carritoVacio.style.display = "block";
};

items.forEach(i => {
    totalCompra += i.subtotal;
    cantidad += i.cantidad;
});




calcularTotal(totalCompra,subtotal,totalEnvio,divEnvio,varCompra,items,varSubtotal);


items.forEach(item => {    
    const infoProducto = productos.find(p => p.id === Number(item.id));   
    const ticket = document.createElement("div");
    if (!infoProducto) return;
    ticket.className = "resumenProducto";
    ticket.innerHTML = `
    <div id="contenedorImg">
        <img src="${infoProducto?.imagen}" alt="Imagen de Hamburguesa" class="card-img" id="imgCarrito">
    </div>
    <div id="contenedorDescripcion">
        <h4 id="h4Descripcion">${infoProducto?.nombre}</h4>
        <p id="pDescricpcion">${infoProducto?.descripcion}</p>
        <h3 id="h3Descripcion">$ ${infoProducto.precio.toFixed()} c/u</h3>
    </div>
    <div id="selectorDescripcion">
        <div class="selector-detalleProducto">
            <button class="btn-detalleProducto" id="btnRestar">-</button>
            <div class="cantidad-detalleProducto">${item.cantidad}</div>
            <button class="btn-detalleProducto" id="btnSumar">+</button>
        </div>
    </div>
    <div id="contenedorPrecio">    
        <h3 id="h3Precio">$ ${(item.cantidad * infoProducto.precio).toFixed(2)}</h3>
    </div>
    <div id="contenedorTacho">
        <div id="tacho">
            <span>🗑️</span>
        </div>
    </div>
    `;
    
    contenedorCarrito.appendChild(ticket);


    const sumarCarrito = ticket.querySelector("#btnSumar") as HTMLElement; 
    const restarCarrito = ticket.querySelector("#btnRestar") as HTMLElement; 
    const cantidadItem = ticket.querySelector(".cantidad-detalleProducto") as HTMLElement;
    const precioItem = ticket.querySelector("#h3Precio") as HTMLElement;
    const tacho = ticket.querySelector("#tacho") as HTMLElement;        
    

    
    btnBorrar.addEventListener("click", () => {
    localStorage.setItem("itemsCarrito", JSON.stringify([]));
    calcularTotal(totalCompra,subtotal,totalEnvio,divEnvio,varCompra,items,varSubtotal);
    location.reload();
})
    
    
    sumarCarrito.addEventListener("click", () => {        
        cantidad = editarItem("sumar",item,infoProducto,precioItem,cantidadItem,items,cantidad,carritoVacio,ticket); 
        calcularTotal(totalCompra,subtotal,totalEnvio,divEnvio,varCompra,items,varSubtotal);     
   
    });


    restarCarrito.addEventListener("click", () => {
        cantidad = editarItem("restar",item,infoProducto,precioItem,cantidadItem,items,cantidad,carritoVacio,ticket); 
        calcularTotal(totalCompra,subtotal,totalEnvio,divEnvio,varCompra,items,varSubtotal);  
        // cantidad += 1;  
   
    });



    tacho.addEventListener("click", () =>{ 
        cantidad = editarItem("eliminar",item,infoProducto,precioItem,cantidadItem,items,cantidad,carritoVacio,ticket); 
        calcularTotal(totalCompra,subtotal,totalEnvio,divEnvio,varCompra,items,varSubtotal);       
    })
})



btnPago.addEventListener("click", () => {   
    confirmarCompra(items,productos,detalleItem,btnPago,cantidad,carritoVacio,btnPagar);
}) 


btnPagar.addEventListener("click", () => {   
    confirmarCompra(items,productos,detalleItem,btnPago,cantidad,carritoVacio,btnPagar);

}) 


iconoOpciones.addEventListener("click", () => {
    listaHeader.classList.toggle("activo");
}); 