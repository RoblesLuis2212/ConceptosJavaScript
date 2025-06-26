//Un objeto es una entidad que tiene caracteristicas y acciones

//notacion literal
const Pelicula = {
  //Propiedades
  Titulo: "Episodio 3 La venganza de los siths",
  Duracion: "2:20:00",
  Year: 2005,
  Puntaje: 9.5,
  Categoria: "Ciencia Ficción",
  Actores: ["Ewan McGregor", "Hayden Chirstensen"],
  //Metodos
  Reproducir: function () {
    document.writeln(`<p>Comenzo la peli</p>`);
  },
  Detener: () => {
    document.writeln(`<p>La peli se detuvo</p>`);
  },
};
console.log(Pelicula);
