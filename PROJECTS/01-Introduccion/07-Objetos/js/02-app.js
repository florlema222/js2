const producto2 = {
  nombre: "Monitor 20 pulgadas",
  precio: 200,
  disponible: true,
  origen: {
    pais: "china",
    region: {
      nombreReg: "sur",
      poblado: "bubu"
    }
  }
};

console.log(producto2.disponible);  //true
console.log(producto2.origen.region.poblado); //bubu
console.log(producto2.origen.pais); //china


//destructuring nested objects

const { nombre, origen, origen: { pais }, origen: { region: { nombreReg } } } = producto2; //utilizo las keys para acceder pero la variable que se crea es sobr el ultimo

console.log(nombre); // monitor 20 pulgadas
console.log(pais); // china
console.log(nombreReg); // sur
console.log(origen); // objeto origen {
                     //    pais: "china"
                     //    region: {
                     //      nombreReg: "sur"
                     //      poblado: "bubu"
                     //     }
                     //  }
