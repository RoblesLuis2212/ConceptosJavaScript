//crear un programa que calcule cuantos grados fahrenheit son X grados centigrados. Formula = (x °C × 9/5) + 32
const gradosCentigrados = parseInt(prompt("Ingrese los grados centigrados: "));
const gradoFarenheit = (gradosCentigrados * 9/5) + 32;

document.writeln("<p>Los grados centrigrados: "+gradosCentigrados+"°C, equivalen a " +gradoFarenheit+"°F");
//Ventana emergente para mostrar mensajes
alert("Los grados centrigrados: "+gradosCentigrados+"°C, equivalen a " +gradoFarenheit+"°F");