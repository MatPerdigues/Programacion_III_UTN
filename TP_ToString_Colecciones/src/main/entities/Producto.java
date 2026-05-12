package main.entities;

import java.util.HashSet;
import java.util.Set;

public class Producto extends Base{
    private String nombre;
    private Double precio;
    private String descripcion;
    private int stock;
    private String imagen;
    private Boolean disponible;
    private Set<DetallePedido> detallesPedidos = new HashSet<>();
    private Categoria categoria;
    private static Set<Producto> productos = new HashSet<>();


    public Producto (Long id, String nombre, Double precio, String descripcion, int stock, String imagen, Boolean disponible, Categoria categoria){
        super(id);
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.stock = stock;
        this.imagen = imagen;
        this.disponible = disponible;
        this.categoria = categoria;

        productos.add(this);
    }


    public Double getPrecio(){
        return this.precio;
    }


    public static Set<Producto> getProductos() {
        return productos;
    }



    @Override
    public String toString(){
        return "id= "+ id + " " + nombre + ", Precio= " + precio + ", Categoria= " + categoria +"]";
    }


    @Override
    public boolean equals(Object objeto) {
        if(this == objeto){
            return true;
        }
        if(objeto == null || this.getClass() != objeto.getClass()){
            return false;
        }
        Producto producto = (Producto) objeto;
        return this.id.equals(producto.id);
    }


    @Override
    public int hashCode() {
        return this.id.hashCode();
    }
    
}
