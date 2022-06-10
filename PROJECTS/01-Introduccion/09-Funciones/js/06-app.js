//iterar con arrow functions

const carrito = [
  { nombre: "monitor", precio: 500 },
  { nombre: "tablet", precio: 200 },
  { nombre: "mouse", precio: 150 },
  { nombre: "teclado", precio: 100 },

];


const carritoFUncion = carrito.forEach( (producto) => console.log(`${producto.nombre} - Precio: ${producto.precio}`));


const nuevoCarrito = carrito.map( (producto) => `${producto.nombre} - Precio: ${producto.precio}`);

console.log(carritoFUncion); //existe
console.log(nuevoCarrito); //existe
