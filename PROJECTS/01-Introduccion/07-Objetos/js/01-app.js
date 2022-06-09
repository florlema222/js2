//un objeto agrupa todas las caracteristicas en una sola variable
const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 200,
  disponible: true
};

console.log(producto);
console.log(producto.nombre);
//also
console.log(producto["nombre"]);

//agregar propiedades al objeto
producto.imagen = "imagen.jpg";

//eliminar propiedad del objeto
delete producto.precio;

//extracción de propiedades ṕara una variable - destructuring
const { nombre, imagen, disponible } = producto;
console.log(nombre); // ya son variables "independientes"
console.log(imagen);
console.log(disponible);
