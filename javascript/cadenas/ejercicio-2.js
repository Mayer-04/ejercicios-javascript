/* Programa una función que repita un texto X veces. Haz las validaciones necesarias. */

function repetirTexto(texto, vecesARepetir) {
  if (!texto) {
    return "Ingresa una cadena de texto";
  }

  if (!vecesARepetir) {
    return "Ingresa un número de veces a repetir";
  }

  if (vecesARepetir <= 0) {
    return "El número de veces no puede ser 0 o negativo";
  }

  /* if (Math.sign(vecesARepetir) === -1) {
      return "El número de veces debe ser positivo.";
  } 
  */

  let resultado = ``;

  for (let i = 1; i <= vecesARepetir; i++) {
    resultado += `${texto} `;
  }
  return resultado;
}

console.log(repetirTexto("Hola", 5));
