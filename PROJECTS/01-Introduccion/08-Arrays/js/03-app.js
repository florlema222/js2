const arreglo2 = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];
const arreglo3 = ["agregado"];

//METODOS
//push forma IMPERATIVA
arreglo2.push("agosto"); //agrega al final del array
console.table(arreglo2);

//... FORMA DECLARATIVA
const resultado = [...arreglo2, ...arreglo3];
console.table(resultado);

//eliminar ultimo pop
resultado.pop();
//eliminar primero
resultado.shift();
console.table(resultado); //enero y agregado no figuran mas

//eliminar por posicion y cantidad especifica SPLICE

resultado.splice(2, 1); //se posiciona en index 2 y elimina 1 valor
console.table(resultado); //abril no figuran mas
