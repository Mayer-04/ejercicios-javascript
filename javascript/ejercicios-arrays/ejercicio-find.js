/* 
Ejercicio:
Dado un array de números, tu objetivo es utilizar el método find para encontrar el primer número que sea mayor
que 10. Debes escribir una función que tome como argumento el array de números y devuelva el número encontrado.
*/

function mayorDiez(numero) {
  return numero.find((n) => n > 10);
}

// Ejercicio sin el método find
const numeroMayor = (numero) => {
  for (let i = 0; i < numero.length; i++) {
    if (numero[i] > 10) {
      return numero[i];
    }
  }
};

// Ejemplo de uso ✅
const numeros = [1, 2, 4, 5, 6, 7, 8, 11, 10, 12];
console.log(numeroMayor(numeros));
