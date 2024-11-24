function calcularIMC() {
    // Obtener los datos del usuario
    const peso = parseFloat(prompt("Por favor, ingrese su peso (kg):"));
    const altura = parseFloat(prompt("Por favor, ingrese su altura (m):"));
  
    // Calcular el IMC
    const imc = peso / (altura * altura);
  
    // Mostrar el resultado en la consola
    console.log(`Su IMC es: ${imc.toFixed(2)}`);
  
    // Clasificar el IMC
    if (imc < 18.5) {
      console.log("Usted se encuentra por debajo del peso normal.");
    } else if (imc < 25) {
      console.log("Usted se encuentra en el rango de peso normal.");
    } else if (imc < 30) {
      console.llog("Usted tiene sobrepeso.");
    } else {
      console.log("Usted tiene obesidad.");
    }
  }