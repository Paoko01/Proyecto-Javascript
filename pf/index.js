function agregarPregunta() {        //creo una función para agregar preguntas
    const texto = prompt("Ingrese su pregunta");    //prompt para ingresar la pregunta.
    const opciones = []; //array para almacenar las opciones
    let opcion; //declaro un objeto opcion como un let ya que será variable
    do {
        opcion = prompt("Ingrese una opción, si no desea continuar dejar en blanco");    //prompt para ingresar la opción.
        if (opcion) {
            opciones.push(opcion);      //si existe una opción hace un push y agrega un elemento al arreglo de preguntas.
        }
    }while (opcion);   // realiza otra evaluación para seguir el bucle, si se deja vacío se sale del bucle.
    preguntas.push(new Pregunta(texto, opciones));  //agrega los cambios creando una nueva instancia
}

const preguntas = []; 
let continuarAgregando = true; //declaro mi variable continuarAgregando, y le asigno un true para que entre al bucle
agregarPregunta(); //inicio la función para comenzar a agregar preguntas

while (continuarAgregando) {        //genero una evaluación para saber si el usuario desea seguir agregando preguntas
  const respuesta = prompt("¿Desea agregar otra pregunta? (si/no)");    //prompt con la pregunta
  continuarAgregando = respuesta.toLowerCase() === "si";    //si la respuesta es si, la convierto a lowercase
  if (continuarAgregando) { //si continuarAgregando es true, se aplica la función agregarPregunta(), si es falsa sale del bucle
    agregarPregunta();
  }
}      

