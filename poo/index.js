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
            console.log("No puedes ingresar esta opción"); //sino, sale este error
        }
    }

    mostrarResultados() {       //declaro un método para mostrar los resultados
        console.log(this.texto);    //esto muestra la pregunta.
        this.opciones.forEach((opcion, index) => {      //recorro el array.
            console.log(`${opcion}: ${this.votos[index]} votos`)});  //con esto muestro la posición y la cantidad de votos asociada a cada elemento del array.
    }
} //aquí termina la class Question.

const  preguntas = []; //crea el array para almacenar el cuestionario.


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

let continuarAgregando = true; //declaro mi variable continuarAgregando, y le asigno un true para que entre al bucle
agregarPregunta(); //inicio la función para comenzar a agregar preguntas

while (continuarAgregando) {        //genero una evaluación para saber si el usuario desea seguir agregando preguntas
  const respuesta = prompt("¿Desea agregar otra pregunta? (si/no)");    //prompt con la pregunta
  continuarAgregando = respuesta.toLowerCase() === "si";    //si la respuesta es si, la convierto a lowercase
  if (continuarAgregando) { //si continuarAgregando es true, se aplica la función agregarPregunta(), si es falsa sale del bucle
    agregarPregunta();
  }
}
       
function mostrarEncuesta() {            //función para presentar las preguntas al usuario, recopilar sus respuestas y actualizar los resultados de la encuesta en tiempo real.
    preguntas.forEach((pregunta, index) => {    //recorre el arreglo
        console.log(`Pregunta ${index + 1}:`);  // muestra la pregunta actual
        pregunta.mostrarResultados();   //trae el método mostrarResultado mostrando los resultados de la votación en tiempo real

        let respuestaValida = false; //declaro una variable respuestaValida para luego realizar una evaluación
        do {
            const respuestaStr = prompt(`Elija una opción para la pregunta ${index + 1}:`); // pido la respuesta con un prompt
            const respuesta = parseInt(respuestaStr); //transformo el string a un número
            if (!isNaN(respuesta) && respuesta >= 1 && respuesta <= pregunta.opciones.length) { // a través de la función isNaN verifico si el numero ingresado es válido, si efectivamente escribió cualquier cosa tirará isNaN, lo cual dará positivo, como quiero que sea positivo solo en caso de que sea un número y no una cadena de texto, le pongo !isNaN, por lo que me dará falso, lo mismo al revés
              pregunta.votar(respuesta - 1); //traemos el método de votar y le restamos -1 para obtener la posición y agregar un voto
              respuestaValida = true;   // declaro respuestaValida como true para salir del bucle
            } else {    //si es falso ejecuta este otro bloque de código
                console.log("Opción inválida. Por favor ingrese un número válido."); //agrego un mensaje para dejar saber que se equivocó, indicando que hay un false
            }} while (!respuestaValida)});  // mientras el resultado sea false, el bucle continuará ejecutándose
    };
mostrarEncuesta(); //comienzo la función de mostrar encuesta

preguntas.forEach((pregunta, index) => {    //recorro el arreglo y muestro en la consola la pregunta con su resultado en tiempo real, esto porque al no existir más pasos, la encuesta quedaba incompleta
    console.log(`Pregunta ${index + 1}:`);
        pregunta.mostrarResultados()});