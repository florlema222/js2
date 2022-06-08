const producto5 = "esto esta fijo";
console.log(producto5.replace('fijo', 'no tan fijo'));


//.slice corta, tiene que ser de menor a mayor
console.log(producto5.slice(0, 4));
console.log(producto5.slice(4, 0)); // no funciona, no imprime nada
//.substring corta mas inteligente, entiende donde cortar sin importar si es mayor o menor
console.log(producto5.substring(4, 0)); // SI funciona, imprime del 0 al 4


