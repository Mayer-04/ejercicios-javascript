/* 
Escribe una función que tome una cadena como entrada y devuelva una nueva cadena que sea idéntica a la original, 
excepto que elimine los caracteres en las posiciones impares. 
*/

function eliminarCaracteresImpares(cadena) {
  let nuevaCadena = "";

  for (let i = 0; i < cadena.length; i++) {
    if (i % 2 === 0) {
      nuevaCadena += cadena[i];
    }
  }

  return nuevaCadena;
}

console.log(eliminarCaracteresImpares("Andres"));

// Segunda manera de realizar el ejercicio ✅
function eliminarCaracteresImpares(cadena) {
  const nuevaCadena = cadena.split("");
  const cadenaFiltrada = nuevaCadena
    .filter((_cadena, i) => i % 2 === 0)
    .join("");

  return cadenaFiltrada;
}

const palabra = "Andres";
const resultado = eliminarCaracteresImpares(palabra);
console.log(resultado);
