const arreglo = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];


console.log(arreglo);
console.table(arreglo); //para verlo en forma de tabla con el index
console.log(arreglo[0]); // enero



// iterar con for
for (let i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]); // si solo pusiera i, me tiraria los indices.
}

//OBJETOS Y ARRAYS PUEDEN MODIFICAR SUS VALORES AUN SI SE GENERAN CON CONST

