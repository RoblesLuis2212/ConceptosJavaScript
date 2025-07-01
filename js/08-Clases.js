//Personas: Nombre, Apellido, FechaNacimiento,Provincia,Dni,Email,Telefono
//Metodos: CalcularEdad, CambiarContraseña,MostrarDatos,ActualizarDatos

//Alumnos
//Pagar()

//Creacion de la clase persona
class Persona {
  //Metodo constructor se ejecuta automaticamente al instanciar la clase
  constructor(
    nombre,
    apellido,
    fechaNacimiento,
    provincia,
    dni,
    email,
    telefono,
    password
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.provincia = provincia;
    this.dni = dni;
    this.email = email;
    this.telefono = telefono;
    this.password = password;
    this.estado = true; //Valor por defecto
  }
  //Metodos
  MostrarDatos() {
    //Todo lo que quiero que haga el metodo
    document.writeln(`<h2>Datos Personales</h2`);
    document.writeln(`<ul>`);
    document.writeln(
      `<li>Nombre y Apellido: ${this.nombre} ${this.apellido}</li>`
    );
    document.writeln(`<li>Email: ${this.email}</li>`);
    document.writeln(`<li>DNI: ${this.dni}</li>`);
    document.writeln(`<li>Email: ${this.email}</li>`);
    document.writeln(`</ul>`);
  }
  Calcular_Edad() {}
  CambiarPassword(passwordActual, newPassword) {
    if (passwordActual === this.password) {
      this.password = newPassword;
      console.log("Cambiaste la contraseña");
    }
  }
}

//Logica del programa
//Instanciamos la clase Persona y creamos un objeto
const maxi = new Persona(
  "Maximiliano",
  "Gomez Tolra",
  "18/07/04",
  "Tucumán",
  "40254874",
  "maxigomeztolrra@gmail.com",
  "-",
  "3863457852",
  "%ABC12345"
);
const agus = new Persona(
  "Agustina",
  "Bulacio",
  "02/05/200",
  "Buenos Aires",
  "42798248",
  "agusbulacion2020@gmail.com",
  "-",
  "3884616131",
  "%ABC12345"
);

console.log(maxi);
//Invocacion al metodo de la clase
maxi.MostrarDatos();
agus.MostrarDatos();
