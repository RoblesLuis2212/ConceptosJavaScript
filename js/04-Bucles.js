//Estructuras de repeticion

//Tipos de bucles: for, while, do-while

/*while mientras se cumple la condicion
while(condicion de logica){
    Todas las lineas de codigo que quiero repetir varias veces
    Agregar una linea que permita que la condicion se pueda dejar de cumplir en algun momento

}
*/
// let Renglon = 1;

// while (Renglon <= 50) {
//   document.writeln(`<p>Renglon ${Renglon}</p>`);
//   Renglon++;
// }

//do-while
/*
do{
    todas las lineas de codigo que quiero
    agregar linea de condicion que haga que la condicion se deje de cumplir
}
while(renglon <= 50){
}
*/
// let fila = 1;
// do {
//   document.writeln(`<p>Renglon ${fila}</p>`);
//   fila++;
// } while (fila <= 50);
// {
// }

//for
/*
for (inicializacion de variable; condicion logica; aumentar o decrementar);
*/
for (let i = 10; i > 0; i--) {
  document.writeln(`<p>Cuenta regresiva: ${i}</p>`);
}
