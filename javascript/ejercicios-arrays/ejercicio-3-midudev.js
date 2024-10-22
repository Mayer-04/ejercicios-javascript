/* 
Crear una función que reciba un array de palabras y devuelva true si todas las palabras terminan con la letra "a" 
y false si al menos una palabra no termina con la letra "a".

- Usa el método endsWith() de string para resolverlo.
*/

function acabanEnA(words) {
  for (let i = 0; i < words.length; i++) {
    const terminaA = words[i].endsWith("a");
    if (!terminaA) {
      return false;
    }
  }
  return true;
}

// Utilizando el método every
function acabanEnA(words) {
  return words.every((word) => word.endsWith("a"));
}

// Ejemplo de uso ✅
const palabras = ["Hola", "Programa", "Celular", "Hoja", "Puerta"];
const resultado = acabanEnA(palabras);
console.log(resultado);
