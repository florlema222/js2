const carrito2 = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
];
//con un forEach

let total = 0;
carrito2.forEach( producto => total += producto.precio);
console.log(total);

// reduce
let resultado2 = carrito2.reduce ((total, producto) => total + producto.precio, 0 );
console.log(resultado2);

//filter

let resultado3 = carrito2.filter (producto => producto.precio < 400);
let resultado4 = carrito2.filter (producto => producto.nombre !== "Audifionos");

console.log(resultado3); //devuelve un objeto con el filtro aplicado
console.log(resultado4);
