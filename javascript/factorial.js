/* Calcula el factorial de un número dado utilizando un bucle o una función recursiva. */

const calcularFactorial = function (numero) {
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
};

// Utilizando Recursividad ✅
function numeroFactorial(numero) {
  if (numero === 0) {
    return 1;
  } else {
    return numero * numeroFactorial(numero - 1);
  }
}

// Ejemplo de uso ✅
const numero = 6;
const factorialDeNumero = numeroFactorial(numero);
console.log(factorialDeNumero);
