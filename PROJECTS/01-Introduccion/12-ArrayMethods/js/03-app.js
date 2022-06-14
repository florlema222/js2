const carrito3 = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
];


//find a specific item
let resultado5 = '';
carrito3.forEach ( (producto, index) => {
  if (producto.nombre === "Tablet") {
    resultado5 = carrito3[index];
  }
});
console.log (resultado5);

// find con FIND method

const resultado6 = carrito3.find( producto => producto.nombre === "Tablet");
console.log(resultado6);

