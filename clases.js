class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    mostrarDetalle() {
        return "El producto seleccionado es un(a) " + this.nombre.toUpperCase() + 
               ". Tiene un costo de $" + this.precio + 
               " y pertenece a la sección de " + this.categoria + ".";
    }
}

const btn = document.getElementById('btnMostrar');
const container = document.getElementById('resultado-container');
const texto = document.getElementById('texto-detalle');

btn.addEventListener('click', () => {
    // Creamos la instancia
    const miProducto = new Producto("Smartphone Galaxy", 899, "Tecnología Móvil");
    
    // Mostramos el contenedor y el texto
    container.style.display = 'block';
    texto.innerText = miProducto.mostrarDetalle();
});
