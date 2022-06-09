//funciones que se pasan valores
function suma(a, b) {
  return a+b;
}

const resultado = suma(4,6);

console.log(resultado);

//ejemplo mas avanzado

let total = 0;                        //total empieza en 0
function agregarCarrito(precio) {     //la funcion esta solo establece que el total va a ser el precio que se pase del item que se
  return total += precio;             //agrega al carrito
}

function  calcularImpuesto(total) {   //tomo el valor que tiene acumulado el total
  return total * 1.15;
}

agregarCarrito(300);
agregarCarrito(200);                  //se van sumando los valores total = 500
const totalAPagar = calcularImpuesto(total);

console.log(total);
console.log(totalAPagar);
