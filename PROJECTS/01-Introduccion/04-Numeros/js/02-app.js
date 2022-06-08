let resultado;

//pi

resultado = Math.PI;
resultado = Math.round(resultado); //round redondea con logica de pasar o no la mitad, esto da 3 (3.14 esta mas cerca del 3)
console.log(resultado);

//redondear para arriba
resultado = Math.PI;
resultado = Math.ceil(resultado); //ciel redonde al proximo valor siempre, esto da 4
console.log(resultado);

//redondear hacia abajo
resultado = Math.PI + 0.8;
console.log(resultado);
resultado = Math.floor(resultado); //ciel redonde al proximo valor siempre, esto da 4
console.log(resultado);

// absoluto (pasa de negativo a positivo)
resultado = -500;
console.log(Math.abs(resultado));

// minimo - maximo
resultado = Math.min(100, 45.2, 155, 45.3); // no pasa arrays, tira NaN, si o si (numero, numero, numero, etc)
console.log(resultado); // imprime 45.2
resultado = Math.max(100, 45.2, 155, 45.3);
console.log(resultado); // imprime 155

// random - genera numero random con muchos decimales, se puede combinar con floor o ceil para un entero random
resultado = Math.floor(Math.random() * 30);
console.log(resultado);
