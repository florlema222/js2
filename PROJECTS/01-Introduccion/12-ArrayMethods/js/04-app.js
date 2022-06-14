//concatenar con concat y con spread operator


const meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses3 = ['Agosto', 'Septiembre'];

const resultado9 = meses2.concat (meses3);
console.log(resultado9);


//spread operator

const resultado10 = [...meses2, ...meses3];
console.log(resultado10);

