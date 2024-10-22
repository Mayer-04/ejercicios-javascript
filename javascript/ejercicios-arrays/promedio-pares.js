/* 
Promedio de Números Pares:
Escribir una función que calcule el promedio de los números pares en un array.
*/

function calcularPromedioPares(arr) {
  let sumaPares = 0;
  let contadorPares = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumaPares += arr[i];
      contadorPares++;
    }
  }

  let sumaPromedio = sumaPares / contadorPares;
  return sumaPromedio;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(calcularPromedioPares(numeros)); // Promedio 6

// Segunda forma ✅
function calcularPromedioPares(arr) {
  const numerosPares = arr.filter((numero) => numero % 2 === 0);

  const sumaPares = numerosPares.reduce((suma, numero) => suma + numero, 0);
  const promedio = sumaPares / numerosPares.length;

  return promedio;
}
