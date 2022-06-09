
//Object Literal
const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 200,
  disponible: true,
  };


//Object constructor
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto('Monitor 20 pulgadas', 400);

console.log(producto);
console.log(producto2);
