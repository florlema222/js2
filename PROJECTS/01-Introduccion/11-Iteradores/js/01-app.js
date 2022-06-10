for ( let i = 1; i <= 10; i++ ) {
  if( i % 2 === 0 ) {
    console.log(i);
  }
}

// como romper un for loop:
// if condicion true = hacer algo y break;
// para cumplir una condicion y que luego continue haciendo el loop:
// if condicion true = hacer algo y continue - vuelve a correr el loop habiendo sumando un valor a i++

const carrito = [
  { nombre: "monitor", precio: 500 },
  { nombre: "tablet", precio: 200, descuento: true },
  { nombre: "mouse", precio: 150 },
  { nombre: "teclado", precio: 100 },

];

for( let i = 0; i <= carrito.length; i++ ) {
  if(carrito[i].descuento ) {
    console.log(`${carrito[i].nombre} tiene descuento`);
    continue;
  }
  console.log(carrito[i].nombre);
}
