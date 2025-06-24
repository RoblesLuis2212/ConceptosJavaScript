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
// const saludar = function () {
//   document.writeln("Hola Mundo!!");
// };

// const Sumar = function (numero1, numero2) {
//   const Resultado = numero1 + numero2;
//   document.writeln(`<p>El resultado de la suma es ${Resultado}</p>`);
// };
//Arrow function, funciones flecha
const Sumar = (number1, number2) => {
  const Resultado = number1 + number2;
  console.log("El resultado de la suma es: " + Resultado);
};

//Invocar a la funcion
Sumar(10, 15);
Saludar();
Saludar();
Saludar();
// saludar();
//Uso de la funcion de expresion sumar
const num1 = parseInt(prompt("Ingrese el primer numero: "));
const num2 = parseInt(prompt("Ingrese el segundo numero: "));
Sumar(num1, num2);
Sumar(5, 20);
//Solicitamos datos al usuario y pasamos los parametros que solicita la funcion
const Nombre = prompt("Ingrese su nombre: ");
const Apellido = prompt("Ingrese su apellido: ");
Saludar_Persona(Nombre, Apellido);

const texto_Generado = Mostrar_Cancion("Crimen");

document.writeln(Mostrar_Cancion("Flaca"));
document.writeln(`El texto generado fue ${texto_Generado}`);
