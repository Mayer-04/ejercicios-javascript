/*
Cálculo de promedio

Programa una función que dado un arreglo de números obtenga el promedio.

Ejemplo: promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5
*/

function promedio(arr) {
  const numeroMax = Math.max(...arr);
  const numeroMin = Math.min(...arr);

  return (numeroMax + numeroMin) / 2;
}

console.log(promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // 4.5
