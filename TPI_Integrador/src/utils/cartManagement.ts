
import type { IProdCarrito } from "../types/Product";
import type { Product } from "../types/Product";


export const calcularTotal = (
    totalCompra : number,
    subtotal : number,
    totalEnvio : number,
    divEnvio : HTMLElement,
    varCompra : HTMLElement,
    items: IProdCarrito[], 
    varSubtotal : HTMLElement, 
) => { 
    subtotal = 0;
    items.forEach(i => {
        subtotal += i.subtotal;        
    }) 
    varSubtotal.innerHTML = `$ ${subtotal.toFixed(2)}`;    

    totalCompra = 0;
    if(subtotal === 0){
        totalEnvio = 0;
        divEnvio.innerHTML = `$ ${totalEnvio.toFixed(2)}`;
        } else {
            totalEnvio = 4300;
            divEnvio.innerHTML = `$ ${totalEnvio.toFixed(2)}`;
    }
    totalCompra = subtotal + totalEnvio;
    varCompra.innerHTML = `$ ${totalCompra.toFixed(2)}`;     
    
    return totalCompra;
}





export const editarItem = (
    accion : "sumar" | "restar" | "eliminar",
    item : IProdCarrito,
    producto : Product,
    precioItem : HTMLElement,
    cantidadItem : HTMLElement,
    items: IProdCarrito[],
    cantidad : number,
    carritoVacio : HTMLElement,
    ticket? : HTMLElement
) => {
    const itemActualizado = item;
    
    if (itemActualizado){
        if(accion === "sumar"){      
            if(itemActualizado.cantidad < producto.stock){
                itemActualizado.cantidad += 1;          
                itemActualizado.subtotal += producto.precio;  
                // total = itemActualizado.subtotal;       
                // if(producto){total += producto.precio};
                precioItem.innerHTML = `$ ${itemActualizado.subtotal.toFixed(2)}`;  
                cantidadItem.innerHTML = `${itemActualizado.cantidad}`; 
                cantidad += 1; 
            }else {
                cantidadItem.style.border = "1px solid red";             
            } 
        }
        if(accion === "restar"){
            cantidadItem.style.border = "none";
            if(itemActualizado.cantidad > 0){
                itemActualizado.cantidad -= 1;
                itemActualizado.subtotal -= producto.precio;
                precioItem.innerHTML = `$ ${itemActualizado.subtotal.toFixed(2)}`;  
                cantidadItem.innerHTML = `${itemActualizado.cantidad}`;
                cantidad -= 1;  
            }
        }
        if (accion === "eliminar") {
            cantidad = 0;
            const index = items.findIndex(i => i.id === item.id);

            if (index !== -1) {
                items.splice(index, 1); 
            }
            localStorage.setItem("itemsCarrito", JSON.stringify(items));
            if (ticket) ticket.remove();
            cantidad = cantidad - itemActualizado.cantidad
            items.forEach(i => {
                cantidad += i.cantidad;
            });

            if (items.length === 0){
                carritoVacio.style.display = "block";
            }
        }        
    }         
    return cantidad;
}





export const consolidarStock = (    
    items: IProdCarrito[],
    productos: Product[]
) => {
    items.forEach(i => {
        const productoActualizado = productos.find(p => p.id === (i.id));        
        let stockActualizado = 0;
        if(productoActualizado){ 
            stockActualizado = productoActualizado.stock - i.cantidad; 
            productoActualizado.stock = stockActualizado;           
        }
    })
    localStorage.setItem("productos", JSON.stringify(productos));  
}






export const confirmarCompra = (items: IProdCarrito[], productos: Product[],detalleItem : NodeListOf<HTMLElement>, btnPago : HTMLElement, cantidad : number, carritoVacio : HTMLElement, btnPagar? : HTMLElement) => {  
    if (cantidad > 0){
        if(!btnPagar)return;
        consolidarStock(items,productos);
        btnPago.classList.add("activo");
        btnPago.textContent = "Compra Confirmada"; 
        detalleItem = document.querySelectorAll(".resumenProducto");
        btnPagar.classList.add("activo");   
        setTimeout(() => {                        
            detalleItem.forEach(item => {
                item.style.display="none";
            })
            localStorage.setItem("itemsCarrito", JSON.stringify([]));  
            carritoVacio.style.display = "block";                
            btnPagar.classList.toggle("inactivo");
        }, 2000);
    }
        }

