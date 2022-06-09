//declaracion de funcion FUNCTION DECLARATION

suma();             // esto puede hacerse porque es una funcion declarada, por lo que el hoisting lee primero las funciones y
                    // en una segunda vuelta corre el codigo
function suma() {
  console.log(2+2);
}


//function expression
const suma2 = function() {
  console.log(3+3);
};
suma2();

// =/ DIF entre ambas: las function declarations cargan antes que cualquier otro codigo,
//mientras que las expression cargan cuando el interpretador las alcanza

//
