const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 2;

console.log(typeof numero1); //string

//convertir string a numero, llamando a la biblio/objeto Number, metodo parseInt
console.log(Number.parseInt(numero1)); //devuelve entero
console.log(Number.parseFloat(numero2)); //devuelve float
console.log(Number.parseFloat(numero3)); //devuelve NaN
console.log(Number.isInteger(numero4)); //devuelve true
