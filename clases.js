class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    mostrarDetalle() {
        return "✨ " + this.nombre + " | 💰 $" + this.precio + " | 🏷️ " + this.categoria;
    }
}

// Creamos un array con 10 instancias diferentes de la clase Producto
const inventario = [
    new Producto("Smartphone S23", 999, "Tecnología"),
    new Producto("Laptop Air M2", 1200, "Computación"),
    new Producto("Audífonos Noise Cancel", 250, "Audio"),
    new Producto("Monitor Gamer 144hz", 400, "Accesorios"),
    new Producto("Teclado Mecánico RGB", 120, "Periféricos"),
    new Producto("Cámara Mirrorless", 850, "Fotografía"),
    new Producto("Reloj Inteligente V2", 199, "Wearables"),
    new Producto("Consola de Videojuegos", 500, "Gaming"),
    new Producto("Silla Ergonómica", 300, "Muebles"),
    new Producto("Disco Duro Externo 2TB", 80, "Almacenamiento")
];

document.getElementById('btnMostrar').addEventListener('click', () => {
    // Generamos un índice aleatorio entre 0 y 9
    const indiceAleatorio = Math.floor(Math.random() * inventario.length);
    
    // Obtenemos el producto seleccionado
    const productoSeleccionado = inventario[indiceAleatorio];
    
    // Mostramos el detalle en el navegador
    document.getElementById('display').innerText = productoSeleccionado.mostrarDetalle();
});
