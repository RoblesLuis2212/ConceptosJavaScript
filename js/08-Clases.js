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
  get getNotas() {
    return this.#notas;
  }
  set setNotas(nuevaNota) {
    this.#notas.push(nuevaNota);
  }
  //Agregar metodos
  MostrarDatos() {
    document.writeln(`<ul class="list-group">
      <li class="list-group-item">Nombre y Apellido: ${this.nombre} ${this.apellido} </li>
      <li class="list-group-item">Email: ${this.getEmail}</li>
      <li class="list-group-item">Telefono: ${this.telefono}</li>
      <li class="list-group-item">Comision: ${this.comision}</li>
      <li class="list-group-item">Notas: ${this.getNotas}</li>
      </ul>
      `);
  }
  calcularPromedio() {
    let suma = 0;
    for (let i = 0; i < this.#notas.length; i++) {
      suma += this.#notas[i];
      return suma / this.#notas.length;
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

//Crear objeto alumno
const paula = new Alumno(
  "Paula",
  "Gramajo",
  "02/05/200",
  "Buenos Aires",
  "42765911",
  "paugramajo@gmail.com",
  "789798454",
  "3887826131",
  "C13",
  "Full Stack"
);
console.log(paula);
//Usamos el metodo set de la clase alumno para modificarlo
paula.setEmail = "paulita@gmail.com";
document.writeln(`<p>Nuevo email: ${paula.getEmail}</p>`);
paula.setNotas = 8;
paula.setNotas = 10;

//Volvemos a mostrar los datos
paula.MostrarDatos();
document.writeln(
  `<p>El promedio de ${paula.apellido} ${
    paula.nombre
  } es ${paula.calcularPromedio()}</p>`
);
