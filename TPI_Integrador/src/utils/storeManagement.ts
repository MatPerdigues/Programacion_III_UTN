import type { Product } from "../types/Product";
import type { IProdCarrito } from "../types/Product";

const productos: Product[] = JSON.parse(localStorage.getItem("productos") || "[]");
const cantidadProducto = document.querySelector(".cantidad-detalleProducto") as HTMLElement;
const estadoProducto = document.querySelector("#estado-detalleProducto") as HTMLElement;
const globoCarrito = document.querySelector("#noti-carrito") as HTMLElement;
const arrayCarrito : IProdCarrito[] = [];

let iCantidad = 0;
let acumulador:number = 0;



export const actualizarCantidad = (    
    accion: "sumar" | "restar" | "anular" | "agregar",
    productoActual : Product,   
    stockActual : number,
    mostrarElementos?:() => void,

) => {  
        if (accion === "sumar") { 
            if(stockActual > 0){        
                iCantidad++;
                stockActual--; 
                cantidadProducto.textContent = iCantidad.toFixed();
                estadoProducto.textContent = "Disponible | Stock: " + stockActual;

            }
            if(stockActual === 0){
                cantidadProducto.style.border = "1px solid red";
                estadoProducto.textContent = "Sin stock"
                estadoProducto.style.backgroundColor = "rgb(192, 57, 43)";
            }
        }

        if (accion === "restar") {
            if(iCantidad > 0){        
                iCantidad--;
                stockActual++;
                cantidadProducto.textContent = iCantidad.toFixed();
                estadoProducto.textContent = "Disponible | Stock: " + stockActual;
                cantidadProducto.style.border = "1px solid lightgrey";
                estadoProducto.style.backgroundColor = "rgb(39, 174, 96)";

            }
        }

        if (accion === "anular") {            
            iCantidad = 0;
            cantidadProducto.textContent = iCantidad.toFixed();
            if(mostrarElementos){
                mostrarElementos();
            }
        }


            
        if(accion === "agregar"){
            console.log(iCantidad);
            if(iCantidad > 0){
                const productoCarrito : IProdCarrito = {
                        id : productoActual.id,
                        cantidad : iCantidad,
                        subtotal : iCantidad * productoActual.precio
                    }
                const productoArray = arrayCarrito.find(p => p.id === productoActual.id);
                
                
                if(productoArray){        
                    productoArray.cantidad = productoArray.cantidad + iCantidad;
                
                } else {
                    arrayCarrito.push(productoCarrito);            
                }  
                
                acumulador = acumulador + iCantidad;
                globoCarrito.textContent = acumulador.toFixed();
                globoCarrito.style.display = "flex";
                productoActual.stock = productoActual.stock - iCantidad;

                iCantidad = 0;
                cantidadProducto.textContent = iCantidad.toFixed(); 
                localStorage.setItem("itemsCarrito", JSON.stringify(arrayCarrito));
                const productoHome = productos.find(p => p.id === productoActual.id);
                if(productoHome){
                    productoHome.stock = productoActual.stock - iCantidad;
            
                } 
            }    
                

        }

        return stockActual;

}






