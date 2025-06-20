//Una funcion es un bloque de codigo que cumple una funcion espefica dentro del programa
//Permite reutilizar codigo

//Funciones tradicionales
function Saludar() {
  //Todas las lineas de codigo que sabe hacer esta funcion
  document.writeln(`<p>Hola Mundo🌍</p>`);
}
//Funcion con parametros
function Saludar_Persona(nombre, apellido) {
  document.writeln(`<p>Hola ${nombre} ${apellido}</p>`);
}
//Funciones que retornan un valor
function Mostrar_Cancion(nombre_cancion) {
  const Cancion = "La cancion ingresada es: " + nombre_cancion;
  return Cancion;
}

//Expresion de funcion

//Arrow function, funciones flecha

//Invocar a la funcion
Saludar();
Saludar();
Saludar();
Saludar();
Saludar();

//Solicitamos datos al usuario y pasamos los parametros que solicita la funcion
const Nombre = prompt("Ingrese su nombre: ");
const Apellido = prompt("Ingrese su apellido: ");
Saludar_Persona(Nombre, Apellido);

const texto_Generado = Mostrar_Cancion("Crimen");

document.writeln(Mostrar_Cancion("Flaca"));
document.writeln(`El texto generado fue ${texto_Generado}`);
