package main.entities;

import java.util.HashSet;
import java.util.Set;


public class Categoria extends Base {
    private String nombre;
    private String descripcion;
    private Set<Producto> productos = new HashSet<>();

    public Categoria (Long id, String nombre, String descripcion){    
        super(id);    
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    @Override
    public String toString(){
        return nombre + ", Descripcion= " + descripcion + "]";
    }


    @Override
    public boolean equals(Object objeto) {
        if(this == objeto){
            return true;
        }
        if(objeto == null || this.getClass() != objeto.getClass()){
            return false;
        }
        Categoria categoria = (Categoria) objeto;
        return this.id.equals(categoria.id);
    }


    @Override
    public int hashCode() {
        return this.id.hashCode();
    }

}
