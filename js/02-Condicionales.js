//Estructura condicional simple

/*
if(condicion logica){
    Todas las lineas de codigo que quiero que el programa ejecute si se cumple la condicion
}
*/

//Condicional doble
/*
if(condicion logica){
    Todas las lineas de codigo que quiero que el programa ejecute si se cumple la condicion (True)
}
else{
    Lineas de codigo que se ejecutara en caso de que la condicion no se cumpla (False)
}
*/

//Condicional doble (2do caso)
/*
if(condicion logica){
    Todas las lineas de codigo que quiero que el programa ejecute si se cumple la condicion (True)
}
else-if(condicion 2){
    Todas las lineas de codigo que se ejecutaran en caso de que no se cumpla la primera condicion pero si la segunda
    Lineas de codigo que se ejecutara en caso de que la condicion no se cumpla (False)
}
else{
    Todas las lineas de codigo que se ejecutaran si no se cumple la condicion 2
}
*/

//Pedir la edad a una persona y decir si es mayor o menor de edad
const Edad = parseInt(prompt("Ingrese su edad: "));
//Si la edad esta entre 0 y 100 años
if (Edad > 0 && Edad <= 110){
    if (Edad >= 18){
        alert("Eres mayor de edad");
    }
    else{
        alert("Eres menor de edad");
    }
}
else{
    alert("valor erroneo");
}