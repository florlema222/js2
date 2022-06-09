//DESTRUCTURING DE ARREGLOS

const numeros = [1,2,3,4,5,6,7,8];

const [primero, , , cuarto, ...quinto] = numeros; //los espacios son para saltear las posiciones de valores a los cuales no los quiero asignar como variable.


console.log(primero, cuarto, quinto); // 1 4 y un array [5,6,7,8]
