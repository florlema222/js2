const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

meses.forEach( mes => {
  if(mes === "Enero") {
    console.log(`Enero si existe`);
  }
});

const resultado = meses.includes("Diciembre");  //puede ser usado con some tambien, some es inclusivo 💓
console.log(resultado); // false

//en un arreglo de objetos se usa some
const existe = carrito.some( (producto) => {
  return producto.nombre === "Celular";
});

//version corta
const existe2 = carrito.some( producto => producto.nombre === "Celular");


console.log(existe); // si devuelve true es porque pudo crear la variable o sea existe celular dentro de carrito
console.log(existe2); // si devuelve true es porque pudo crear la variable o sea existe celular dentro de carrito
