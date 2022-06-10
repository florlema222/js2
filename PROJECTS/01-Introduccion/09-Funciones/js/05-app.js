//arrow functions

//forma vieja de armar una funcion
const aprender = function() {
  console.log("aprendiendo");
};

//forma de armar funcion con arrow function
const aprender2 = () => {
  console.log("aprendiendo arrow function");
};

//si el codigo dentro de la funcion solo tiene una linea puede ir sin curvey
const aprender3 = () => console.log("aprendiendo arrow function version de una linea"); //se da por implicito el return, puedo eliminar el consolelog
const aprender4 = () => "aprendiendo arrow function version de una linea sin consolelog en la funcion (si en llamado)";

aprender();
aprender2();
aprender3();
console.log(aprender4());
