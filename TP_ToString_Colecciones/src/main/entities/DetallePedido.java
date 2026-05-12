package main.entities;

public class DetallePedido extends Base{

    private int cantidad;
    private Double subtotal;
    private Producto producto;
    private Pedido pedido;

    public DetallePedido (Long id, int cantidad, Producto producto, Pedido pedido){
        super(id);
        this.cantidad = cantidad;
        this.subtotal = cantidad * producto.getPrecio();
        this.producto = producto;
        this.pedido = pedido;
    }

    public Producto getProducto(){
        return this.producto;
    }

    public Double getSubTotal(){
        return this.subtotal;
    }


    @Override
    public String toString(){
        return " Detalle: Producto= " + producto + "Cantidad= " + cantidad + ", Subtotal= " + subtotal +  "]";
    }

    @Override
    public boolean equals(Object objeto) {
        if(this == objeto){
            return true;
        }
        if(objeto == null || this.getClass() != objeto.getClass()){
            return false;
        }
        DetallePedido detalle = (DetallePedido) objeto;
        return this.id.equals(detalle.id);
    }

    @Override
    public int hashCode() {
        return this.id.hashCode();
    }
    
}
