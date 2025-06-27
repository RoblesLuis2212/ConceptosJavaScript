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
    document.writeln(`<p>Comenzo la peli▶️ <b>${this.Titulo}</b></p>`);
  },
  Detener: () => {
    document.writeln(`<p>La peli se detuvo⏸️ ${this.Titulo}</p>`); //No se puede utilizar this con arrow function
  },
};
//Mostrar objeto por consola
console.log(Pelicula);

//Mostrar las propiedades de un objeto
document.writeln(`<h1>Objeto pelicula</h1>`);
document.writeln(`<p>Titulo: ${Pelicula.Titulo}</p>`);
document.writeln(`<p>Duracion: ${Pelicula.Duracion}</p>`);
document.writeln(`<p>Categoria: ${Pelicula["Categoria"]}</p>`); //Variacion para mostrar el objeto
document.writeln(`<p>Categoria: ${Pelicula.YearR}</p>`); //Al acceder a un objeto que no existe devulve undefined

//Agregar propiedades nuevas al objeto
Pelicula.imbd = 7.6;
document.writeln(`<p>Calificacion IMDB: ${Pelicula.imbd}</p>`);

console.log(Pelicula);

//Modificar propiedades de un objeto
Pelicula.imbd = 8;
console.log(Pelicula);

//Borrar propiedad de un objeto
delete Pelicula.Puntaje;
console.log(Pelicula.Puntaje);

//Usar los metodos del objeto
Pelicula.Reproducir();
Pelicula.Detener();
