let puntaje = 5;
console.log(puntaje);

// incremento y decrecimiento.
puntaje++; //esto solo da 5, el incremento se da en la proxima llamada a la variable
console.log(puntaje); // esto da 6 (ya se aplico el ++)

++puntaje; // esto solo da 6, el incremento se da en esta llamada
console.log(puntaje); // esto da 6 (sigue aplicado el ++)

puntaje--;  // --ṕuntaje es lo mismo (con la diferencia de cuando se asigna el nuevo valor)
console.log(puntaje);

// incremento o decrecimiento
puntaje += 3; //incrementa 3
