let numeroRepeticiones = parseInt(prompt("Ingrese un numero del 1 al 50: "));

for (let fila = 0; fila <= numeroRepeticiones; fila++) {
  for (let columna = 0; columna <= fila; columna++) {
    document.writeln(columna + 1);
  }
  document.writeln(`<br>`);
}
