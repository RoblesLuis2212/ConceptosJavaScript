const mostrarCanciones = (titulo) => {
  document.writeln(
    `<h2 class='mt-3'>${titulo} - cantidad de elementos ${canciones.length}</h2>`
  );
  document.writeln("<ul class='list-group'>");
  for (let i = 0; i < canciones.length; i++) {
    document.writeln(`<li class="list-group-item">${canciones[i]}</li>`);
  }
  document.writeln("</ul>");
};

// como declarar un array
// array vacio
const peliculas = [];

// array de canciones
const canciones = ["Batidora", 2010, true, "musica ligera", "mujer amante"];

// mostrar un array
console.log(peliculas);
console.log(canciones);
document.writeln(canciones);
const indice = 0;
document.writeln(`<p>Mostrar un solo elemento del array: ${canciones[3]}</p>`);
document.writeln(
  `<p>Mostrar el primer elemento del array: ${canciones[indice]}</p>`
);
document.writeln(
  `<p>Mostrar el elemento de la posicion 30 del array: ${canciones[30]}</p>`
);

mostrarCanciones("Mostrar el array de canciones");
// agregar elementos al array

canciones.unshift(false, "like stone");
mostrarCanciones("Agregar un elemento al inicio del array");

canciones.push("like a Rolling stone");
mostrarCanciones("Agregar un elemento al final del array");

canciones.splice(4, 0, "feel Good inc");
mostrarCanciones("Agregar un elemento en el medio del array");

//borrar elementos del array
canciones.shift();
mostrarCanciones("Borrar un elemento del inicio del array");

canciones.pop();
mostrarCanciones("Borrar un elemento del final del array");
canciones.splice(2, 1);
// canciones.splice(2,3) //desde la posicion 2 del array borro 3 elementos
// canciones.splice(2) //borrar todo desde la posicion 2 del array
// canciones.splice( canciones.length - 1 ,1)
mostrarCanciones("Borrar un elemento del medio del array");

//modificar elementos del array
canciones[3] = "Sobredosis de TV";
mostrarCanciones("Modificar un elemento del array");
