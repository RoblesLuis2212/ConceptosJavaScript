//Cree un programa al estilo de un cajero automatico con las siguientes opciones:
//1- consultar el saldo
//2- ingresar dinero
//3- extraer dinero


/* switch(opcion){
    case 1:
        Todas las lineas de codigo que quiero hacer si la opcion de usuario es 1;
        break
        case 2:
            Todas las lineas de codigo que quiero hacer si la opcion de usuario es 1;
            break
            case N:
                Todas las lineas de codigo que quiero hacer si la opcion de usuario es N;
                break
                default:
                    Todas las lineas a ejecutar si las condiciones anteriores no se cumplen
                    }
                    */
const opcion = prompt("Seleccione una opcion: 1- consultar saldo 2- ingresar dinero 3- extraer dinero");
let Saldo = 10000; //Se define un saldo por defecto

//Agregamos una estructura switch para evaluar las opciones
switch(opcion){
    case "saldo":
    case "1":
        document.writeln("Su saldo es de $"+Saldo+"");
        break;
    case "2":
        const deposito = parseFloat(prompt("Ingrese la cantidad de dinero a depositar"));
        if (deposito > 1000 && deposito < 5000000){
            Saldo = Saldo + deposito;
            alert(`Depositaste $${deposito}, tu saldo actual es $${Saldo}`);
        }
        else{
            alert("Ingresaste un monto invalido");
        }
        break;
    case "3":
        const monto_extraccion = parseFloat(prompt("Ingrese el monto a extraer: "));
        if (monto_extraccion <= Saldo){
            Saldo = Saldo - monto_extraccion;
            alert(`Extraccion exitosa, tu saldo disponible es ${Saldo}`);
        }
        else{
            alert("Fondos insuficientes");
        }
        break;
    default:
        alert("Opcion incorrecta, ingrese una opcion valida");
}