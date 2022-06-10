const reproductor = {

  reproducir: id => console.log(`Reproduciendo cancion ${id}`),
  pausar: () => "canción pausada",
  borrar: id => `Borrando cancion ${id}`,
  crearLista: cancion => {
    lista.push(cancion);
    console.log(lista);
  },
};
const lista = [];
reproductor.reproducir(30);
console.log(reproductor.pausar());
console.log(reproductor.borrar(15));
reproductor.crearLista("balada");
reproductor.crearLista("matador");


 /*   reproducir: function play(id) {
    console.log(`Reproduciendo cancion ${id}`);
  },
  pausar: function pausa() {
    console.log("canción pausada");               ESTO ESTA SIN LA FORMA SIMPLIFICADA DEL ARROW FUNCTION
  },
  borrar: function borrar(id) {
    console.log(`Borrando cancion ${id}`);
  },
  crearLista: function playlist(cancion) {
    lista.push(cancion);
    console.log(lista);
  },
  */
