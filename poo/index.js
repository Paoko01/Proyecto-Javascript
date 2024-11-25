class Question {
    constructor (texto, opciones) {
    this.texto = texto;
    this.opciones = opciones;
    this.votos = new Array(opciones.length).fill(0); // con esto comienzo el contador de votos
    }

    votar(opcion) {
        if (opcion >= 0 && opcion < this.opciones.length) {
            this.votos[opcion]++;   //esto aumenta en 1 el contador para la opción escogida
        } else {
            console.log("No puedes ingresar esta opción");
        }
    }

    mostrarResultado() {
        console.log(this.texto);    //esto muestra la pregunta
        this.opciones.forEach((opcion, index) => {
            console.log(`${opcion}: ${this.votos[index]} votos`)});  //con esto muestro la posición y la cantidad de votos asociada a cada elemento del array
    }
} //aquí termina la class Question



