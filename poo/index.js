class Question {
    constructor (texto, opciones) {
    this.texto = texto;
    this.opciones = opciones;
    this.votos = new Array(opciones.length).fill(0); // con esto comienzo el contador de votos
    }
}


