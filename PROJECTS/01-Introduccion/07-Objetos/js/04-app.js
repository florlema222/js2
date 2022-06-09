const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 200,
  disponible: true
};

const medidas = {
  peso: 40,
  altura: 50
};

// una forma de concatenar/copiar dos objetos en uno
const resultado = Object.assign(producto, medidas);
console.log(resultado); // un objeto llamado resutado con todas las keys de producto y todas las keys de medidas


// otra forma de hacerlo con rest/spread operator
const resultado2 = { ...producto, ...medidas }; // los ... son como un "copiar"
console.log(resultado2); // un objeto llamado resutado con todas las keys de producto y todas las keys de medidas
