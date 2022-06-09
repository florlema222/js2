//iterar

const carrito = [
  { nombre: "monitor", precio: 500 },
  { nombre: "tablet", precio: 200 },
  { nombre: "mouse", precio: 150 },
  { nombre: "teclado", precio: 100 },

];


//con for
for (let i = 0; i < carrito.length; i++) {
  console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

//con forEach
carrito.forEach( function(producto) { //producto aca vienen a ser cada una de las iteraciones
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});


//con map
carrito.map( function(producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});
//map crea un nuevo arreglo, forEach no, por lo que puedo cambiar la sintaxis y conservar ese arreglo en una variable para llamarla despues
const nuevoCarrito = carrito.map( function(producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
});
console.log(nuevoCarrito); //existe
