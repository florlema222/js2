
//parametros por default
const saludo = function(nombre, apellido = "no tiene apellido") {
  console.log(`Hola ${nombre} ${apellido}`);
};
saludo("juan", "perez");
saludo("juan"); // devuelve hola juan no tiene apellido, si no paso el parametro entra el valor asignado pr default
