class Pregunta {
    constructor (texto, opciones) {  //construyo la clase
    this.texto = texto; //le agrego una propiedad
    this.opciones = opciones; //le agrego una propiedad
    this.votos = new Array(opciones.length).fill(0); // con esto comienzo el contador de votos, lo inicio con un método 0 para que cada valor del array parta en 0.
    }

    votar(opcion) {     //creo un método para votar
        if (opcion >= 0 && opcion < this.opciones.length) {     //si la opción es mayor o igual a 0, y menor que la longitud del array se le agrega el contador de abajo
            this.votos[opcion]++;   //esto aumenta en 1 el contador para la opción escogida.
        } else {
            console.log("No puedes ingresar esta opción"); //sino, sale
        }
    }

    mostrarResultados() {
        console.log(this.texto);    //esto muestra la pregunta.
        this.opciones.forEach((opcion, index) => {
            console.log(`${opcion}: ${this.votos[index]} votos`)});  //con esto muestro la posición y la cantidad de votos asociada a cada elemento del array.
    }
} //aquí termina la class Question.

const  preguntas = []; //crea el array para almacenar el cuestionario.


function agregarPregunta() {
    const texto = prompt("Ingrese su pregunta");    //prompt para ingresar la pregunta.
    const opciones = []; //array para almacenar las opciones
    let opcion; //declaro un objeto opcion como un let ya que será variable
    do {
        opcion = prompt("Ingrese una opción, si no desea continuar dejar en blanco");    //prompt para ingresar la opción.
        if (opcion) {
            opciones.push(opcion);      //si existe una opción hace un push y agrega un elemento al arreglo de preguntas.
        }
    }while (opcion);   // realiza otra evaluación para seguir el bucle, si se deja vacío se sale del bucle.
    preguntas.push(new Pregunta(texto, opciones));  //agrega los cambios
}

let continuarAgregando = true;
agregarPregunta();

while (continuarAgregando) {
  const respuesta = prompt("¿Desea agregar otra pregunta? (si/no)");
  continuarAgregando = respuesta.toLowerCase() === "si";
  if (continuarAgregando) {
    agregarPregunta();
  }
}
       
function mostrarEncuesta() {            //función para presentar las preguntas al usuario, recopilar sus respuestas y actualizar los resultados de la encuesta en tiempo real.
    preguntas.forEach((pregunta, index) => {    //recorre el arreglo
        console.log(`Pregunta ${index + 1}:`);
        pregunta.mostrarResultados();

        let respuestaValida = false; //declaro una variable respuestaValida para luego realizar una evaluación
        do {
            const respuestaStr = prompt(`Elija una opción para la pregunta ${index + 1}:`); // pido la respuesta con un prompt
            const respuesta = parseInt(respuestaStr); //transformo el string a un número
            if (!isNaN(respuesta) && respuesta >= 1 && respuesta <= pregunta.opciones.length) { // a través de la función isNaN verifico si el numero ingresado es válido, si efectivamente escribió cualquier cosa tirará isNaN, lo cual dará positivo, como quiero que sea positivo solo en caso de que sea un número y no una cadena de texto, le pongo !isNaN, por lo que me dará falso, lo mismo al revés
              pregunta.votar(respuesta - 1); // le restamos -1 para obtener la posición y agregar un voto
              respuestaValida = true;   // declaro respuestaValida como true para salir del bucle
            } else {
                console.log("Opción inválida. Por favor ingrese un número válido."); //agrego un mensaje para dejar saber que se equivocó
            }} while (!respuestaValida)});  // mientras el resultado sea false, el bucle continuará ejecutándose
    };
mostrarEncuesta();
preguntas.forEach((pregunta, index) => {
    console.log(`Pregunta ${index + 1}:`);
        pregunta.mostrarResultados();})