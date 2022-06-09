"use-strict"; //determina un uso "mas estricto " de js

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 200,
  disponible: true
};

Object.freeze(producto); // no me deja modificar (no agregar, borrar, etc) NADA dentro del objeto producto

console.log(Object.isFrozen(producto)); // me dice si el objeto esta congelado o no


Object.seal(producto); //te deja modificar las llaves existentes pero no agregar ni eliminar
console.log(Object.isSealed(producto)); //ver si esta sellado o no
