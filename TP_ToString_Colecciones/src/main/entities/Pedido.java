package main.entities;
import main.enums.Estado;
import main.enums.FormaPago;


import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

public class Pedido extends Base{
    private LocalDate fecha;
    private Estado estado;
    private Double total;
    private FormaPago formaPago;
    private Usuario usuario;
    private Set<DetallePedido> detalles = new HashSet<>();



    public Pedido (Long id, LocalDate fecha, Estado estado, FormaPago formaPago, Usuario usuario){
        super(id);
        this.fecha = fecha;
        this.estado = estado;    
        this.formaPago = formaPago;
        this.usuario = usuario;

        usuario.setPedidos(this);
    }


    public void addDetallePedido (Long id, int cantidad, Producto producto){
        this.detalles.add(new DetallePedido(id, cantidad, producto, this));
    }


    public DetallePedido findDetallePedidobyProducto (Producto producto){        
        for(DetallePedido detalle : this.detalles){
            if(detalle.getProducto().equals(producto)){                
                return detalle;
            }
        }
        return null;
    }


    public void deleteDetallePedidoByProducto(Producto producto){
        DetallePedido detalleEliminado = null;
        for(DetallePedido detalle : this.detalles){
            if(detalle.getProducto().equals(producto)){
                detalleEliminado = detalle;
                break;                
            }
        }
        if(detalleEliminado != null){
            detalles.remove(detalleEliminado);
        }
    }


    public Double getTotal(){
        Double totalFinal = 0.00;
        for(DetallePedido detalle : this.detalles){
            totalFinal += detalle.getSubTotal();            
        }
        return totalFinal;
    }



    @Override
    public String toString(){
        return "Pedido[Fecha= " + fecha + ", Estado= " + estado + ", Total= " + this.getTotal() + ", Forma de Pago = " + formaPago + "," + detalles + "]";
    }

    @Override
    public boolean equals(Object objeto) {
        if(this == objeto){
            return true;
        }
        if(objeto == null || this.getClass() != objeto.getClass()){
            return false;
        }
        Pedido pedido = (Pedido) objeto;
        return this.id.equals(pedido.id);
    }


    @Override
    public int hashCode() {
        return this.id.hashCode();
    }



}
