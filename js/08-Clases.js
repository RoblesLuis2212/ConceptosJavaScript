//Personas: Nombre, Apellido, FechaNacimiento,Provincia,Dni,Email,Telefono
//Metodos: CalcularEdad, CambiarContraseña,MostrarDatos,ActualizarDatos

//Alumnos
//Pagar()

//Creacion de la clase persona
class Persona {
  //Metodo constructor se ejecuta automaticamente al instanciar la clase
  #email;
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
    this.#email = email;
    this.telefono = telefono;
    this.password = password;
    this.estado = true; //Valor por defecto
  }
  //Propiedades getters y setters
  get getEmail() {
    return this.#email;
  }
  set setEmail(nuevoEmail) {
    this.#email = nuevoEmail;
  }
  //Metodos
  MostrarDatos() {
    //Todo lo que quiero que haga el metodo
    document.writeln(`<h2>Datos Personales</h2>`);
    document.writeln(`<ul>`);
    document.writeln(
      `<li>Nombre y Apellido: ${this.nombre} ${this.apellido}</li>`
    );
    document.writeln(`<li>Email: ${this.getEmail}</li>`);
    document.writeln(`<li>DNI: ${this.dni}</li>`);
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

class Alumno extends Persona {
  #notas;
  constructor(
    nombre,
    apellido,
    fechaNacimiento,
    provincia,
    dni,
    email,
    telefono,
    password,
    comision
  ) {
    //Invoca al constructor de persona
    super(
      nombre,
      apellido,
      fechaNacimiento,
      provincia,
      dni,
      email,
      telefono,
      password
    );
    this.comision = comision;
    this.insignias = [];
    this.rollingCoins = 0;
    this.rollingCoins = 0;
    this.asistencia = 0;
    this.#notas = [];
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
  "3863457852"
);
const agus = new Persona(
  "Agustina",
  "Bulacio",
  "02/05/200",
  "Buenos Aires",
  "42798248",
  "agusbulacion2020@gmail.com",
  "-",
  "3884616131"
);

console.log(maxi);
//Invocacion al metodo de la clase
maxi.MostrarDatos();
agus.MostrarDatos();

maxi.MostrarDatos();

//Mostrar propiedad encapsulada con el metodo get
document.writeln(`<p>Consultar email: ${maxi.getEmail}</p>`);

maxi.setEmail = "maxi@gmail.com";
maxi.MostrarDatos();
