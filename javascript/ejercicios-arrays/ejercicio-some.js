/* 
Dado un array de strings, tu tarea es utilizar el método some para determinar si al menos uno de los elementos
en el array tiene más de 5 caracteres. Debes escribir una función que tome como argumento el array de strings 
y devuelva un valor booleano que indique si se cumple la condición.
*/

function cincoCaracteres(string) {
  return string.some((s) => s.length > 5);
}

// Ejercicio sin el método some 😁
const cincoCaracteres2 = function (string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i].length > 5) {
      return true;
    }
  }
  return false;
};

const palabras = ["amor", "hola", "lima", "alcohol", "pila"];
console.log(cincoCaracteres2(palabras)); // devuelve true, alcohol tiene más de 5 caracteres.
