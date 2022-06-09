
//uso de THIS

//const nombre = "hola";  SI no uso THIS, busca los valores aca afuera
//const precio = 200;

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 200,
  disponible: true,
  mostrarInfo: function() {
    console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`); //this hace referencia al mismo objeto que lo contiene
  }
};

const producto2 = {
  nombre: "Celular",
  precio: 350,
  disponible: true,
  mostrarInfo: function() {
    console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`); //this hace referencia al mismo objeto que lo contiene
  }
};


console.log(producto.mostrarInfo()); //El producto: Monitor 20 pulgadas tiene un precio de 200
console.log(producto2.mostrarInfo()); // El producto: Celular tiene un precio de 350
