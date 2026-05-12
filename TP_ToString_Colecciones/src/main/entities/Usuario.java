package main.entities;
import java.util.HashSet;
import java.util.Set;
import main.enums.Rol;

public class Usuario extends Base {
    private String nombre;
    private String apellido;
    private String mail;
    private String celular;
    private String contrasenia;
    private Rol rol;
    private Set<Pedido> pedidos = new HashSet<>();
    private static Set<Usuario> usuarios= new HashSet<>();

        
    public Usuario (Long id,String nombre, String apellido, String mail, String celular, String contrasenia, Rol rol){
        super(id);
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.celular = celular;
        this.contrasenia = contrasenia;
        this.rol = rol;

        usuarios.add(this);
    }

    public void setPedidos(Pedido pedido){
        pedidos.add(pedido);
    }

    public void mostrarPedido(){
        for(Pedido pedido : pedidos){
            System.out.println(pedido);
        }
    
    }

    public static Set<Usuario> getUsuarios() {
        return usuarios;
    }   


    public int getCantidadPedidos(){
        return this.pedidos.size();
    }

    public String getNombre(){
        return nombre + " " + apellido;
    }

    @Override
    public String toString(){
        return "Usuario[Nombre= " + nombre + ", Apellido= " + apellido + ", Mail= " + mail + ", Celular= " + celular + ", Contraseña= " + contrasenia + ", Rol= " + rol + ", Pedidos= " + pedidos + "]";
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
