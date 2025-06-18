//Como declarar un array
//Array vacio
const Peliculas = [];

// Array de canciones
const Canciones = ["Batidora", 2010, true, "De Musica Ligera", "Mujer Amante"];
console.log(Peliculas);
console.log(Canciones);

document.writeln(Canciones);

//Recorrer Array y mostrar contenido
document.writeln("<ul>");
for (let i = 0; i < Canciones.length; i++) {
  document.writeln(`<li>${Canciones[i]}</li>`);
}
document.writeln("</ul>");
