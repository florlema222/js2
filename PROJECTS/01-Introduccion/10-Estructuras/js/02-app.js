//switch para muchas condiciones

const metodoDePago = "efectivo";

switch(metodoDePago) {
  case "efectivo":
    console.log(`Pagaste con ${metodoDePago}`);
    break;
  case "cheque":
    console.log(`Pagaste con ${metodoDePago}`);
    break;
  default: //como un else
    console.log("Aun no has seleccionado un metodo de pago");
    break;
}


// && and
// || or
