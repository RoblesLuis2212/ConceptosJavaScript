//Como declarar un array
//Array vacio
const Peliculas = [];

// Array de canciones
const Canciones = ["Batidora", 2010, true, "De Musica Ligera", "Mujer Amante"];
console.log(Peliculas);
console.log(Canciones);
document.writeln(Canciones);
//Mostrar elemento especifico del array
document.writeln(`<p>Mostrar un solo elemento del array: ${Canciones[3]}</p>`);

//Recorrer Array y mostrar contenido
document.writeln(`<h2>Mostrar array de canciones</h2>`);
document.writeln(`<ul class="list-group">`);
for (let i = 0; i < Canciones.length; i++) {
  document.writeln(`<li>${Canciones[i]}</li>`);
}
document.writeln("</ul>");

//Agregar elemento al inicio del array
Canciones.unshift("Cancion para mi muerte", "Sobredosis de TV");
document.writeln(Canciones);

//Agregar elemento al final del array
Canciones.push("Like Stone");
document.writeln(Canciones);

//Agragar elemento en posicion especifica del array
Canciones.splice(4, 0, "Cuando Llegue el Alba");
document.writeln(Canciones);

//Eliminar primer elemento del array
Canciones.shift();
console.log(Canciones);

//Eliminar ultimo elemento del array
Canciones.pop();
console.log(Canciones);

Canciones.splice(2, 3); //Desde la posicion 2 del array se elimina 3 elementos
Canciones.splice(2); //Desde la posicion 2 del array elimina todos los elementos
Canciones.splice(Canciones.length - 1, 1); //Opcion para eliminar el ultimo elemento del array

//Modificar un elemento del array
Canciones[3] = "Rasguñan las piedras";
console.log(Canciones);
