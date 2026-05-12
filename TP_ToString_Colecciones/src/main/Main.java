package main;

import java.time.LocalDate;

import main.entities.Categoria;
import main.entities.Pedido;
import main.entities.Producto;
import main.entities.Usuario;
import main.enums.Estado;
import main.enums.FormaPago;
import main.enums.Rol;



public class Main {
    public static void main(String[] args) {

        Categoria Bebidas = new Categoria(21L, "Bebidas", "Bebidas");

        Categoria Hamburguesas = new Categoria(22L, "Hamburguesas", "Hamburguesas");

        Categoria Pizzas = new Categoria(23L, "Pizzas", "Pizzas");

        Categoria Empanadas = new Categoria(24L, "Empanadas", "Empanadas");
        
        Categoria Postres = new Categoria(25L, "Postres", "Postres");

        Categoria Cafeteria = new Categoria(26L, "Cafetería", "Cafetería");

        Producto producto1 = new Producto(5L, "Pizza Muzzarella", 25000.00, "pizza de muzza con salsa de tomate y aceitunas", 28, "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/5802fab5-fdce-468a-a830-43e8001f5a72/Derivates/c00dc34a-e73d-42f0-a86e-e2fd967d33fe.jpg", true, Pizzas);
        
        Producto producto2 = new Producto(6L, "Hamburgusa simple", 17000.00, "Hamburguesa con cheddar", 12, "https://tofuu.getjusto.com/orioneat-local/resized2/Mm5RWta8XvTZDkhGM-2048-x.webp", true, Hamburguesas);

        Producto producto3 = new Producto(7L, "Coca Cola", 11000.00, "Coca Cola 1.5 lts", 49, "https://acdn-us.mitiendanube.com/stores/001/144/141/products/whatsapp-image-2021-06-11-at-19-36-03-11-88c69a6ccaa75978a716234511927730-1024-1024.webp", true, Bebidas);

        Producto producto4 = new Producto(8L, "Agua mineral", 8000.00, "Agua Mineral 1.5 lts", 26, "https://carrefourar.vtexassets.com/arquivos/ids/821219/7792931000039_02.jpg?v=639126407341430000", true, Bebidas);

        Producto producto5 = new Producto(13L, "Empanada de carne", 5000.00, "Empanada de carne cortada a cuchillo", 74, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1b3xdEnw-vy92rBIzFCENHmKBbpUaz9D6Q&s", true, Empanadas);

        Producto producto6 = new Producto(14L, "Empanada de jamón y queso", 5000.00, "Empanada de jamon cocido y queso muzzarella", 52, "https://fedecocina.net/static/ae91b0d3b6d1a19ef50d540e81048579/a764f/empanadas-de-carne.jpg", true, Empanadas);

        Producto producto7 = new Producto(15L, "Flan casero", 7000.00, "Flan caser con dulce de leche o crema", 24, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefNpCHqMK3CPDFAonpNbSJwfix2XZWCARBA&s", true, Postres);

        Producto producto8 = new Producto(16L, "Cheescake", 7000.00, "Cheescake con cobertura de maracuyá", 12, "https://www.allrecipes.com/thmb/RjJOTkv7pmqmZzGAgdtUIImGoGg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/221142-new-york-style-cheesecake-VAT-Beauty-4x3-7a5b4da8cde4437ab0c592e4f4cbe658.jpg", true, Postres);

        Producto producto9 = new Producto(17L, "Cafe expreso", 6000.00, "Cafe solo en taza pqqueña", 174, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5bHChaps2hKjg4aVoULvUtYMX_Z7iXRPPA&s", true, Cafeteria);

        Producto producto10 = new Producto(18L, "Cafe con leche", 9000.00, "Cafe con leche", 54, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRfOBHPQAR2ox5QS_xDInPy3UC2bsEH4pgWQ&s", true, Cafeteria);
        
        Usuario usuario1 = new Usuario(1L, "Aquiles", "Bailo", "bailo@gmail.com", "1556986532", "ab1254", Rol.USUARIO);
        
        Usuario usuario2 = new Usuario(2L, "Marcela", "Sagna", "sagna@gmail.com", "1556986545", "marce125", Rol.USUARIO);        
        
        Pedido pedido1 = new Pedido(3L, LocalDate.now(), Estado.PENDIENTE,  FormaPago.EFECTIVO, usuario1);
        
        Pedido pedido2 = new Pedido(4L, LocalDate.now(), Estado.CONFIRMADO, FormaPago.TRANSFERENCIA, usuario2);

        Pedido pedido3 = new Pedido(19L, LocalDate.now(), Estado.CONFIRMADO, FormaPago.TRANSFERENCIA, usuario1);


        pedido1.addDetallePedido(9L, 2, producto2);

        pedido1.addDetallePedido(10L, 2, producto3);

        pedido2.addDetallePedido(11L, 1, producto1);

        pedido2.addDetallePedido(12L, 4, producto4);

        pedido3.addDetallePedido(19l, 3, producto8);

        pedido3.addDetallePedido(20L, 3, producto9);

        
    
        System.out.println("------------------Información Pedido1---------------------");        
        System.out.println(pedido1);
        System.out.println("");
        System.out.println("------------------Información Producto8---------------------");
        System.out.println(producto8);
        System.out.println("");
        System.out.println("------------------Lista Productos---------------------");        
        for(Producto producto : Producto.getProductos()){
            System.out.println(producto);
        }
        System.out.println("");

        System.out.println("------------------Usuario principal---------------------");  
        Usuario usuarioPrincipal = null;
        int maxPedidos = 0;

        for(Usuario usuario : Usuario.getUsuarios()){
            if(usuario.getCantidadPedidos() > maxPedidos){
                maxPedidos = usuario.getCantidadPedidos();
                usuarioPrincipal = usuario;
            }
        }    
        System.out.println(usuarioPrincipal);
        System.out.println("");


        System.out.println("------------------id equals---------------------"); 
        
        Producto producto11 = new Producto(5L, "Pizza Napolitana", 27000.00, "pizza de Napo con aceitunas", 29, "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/5802fab5-fdce-468a-a830-43e8001f5a72/Derivates/c00dc34a-e73d-42f0-a86e-e2fd967d33fe.jpg", true, Pizzas);

        for(Producto producto : Producto.getProductos()){
            System.out.println(producto11.equals(producto));
        }
    
    }
}
