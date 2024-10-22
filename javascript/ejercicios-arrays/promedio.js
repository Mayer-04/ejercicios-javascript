/* 
Programa una función que dado un arreglo de números obtenga el promedio. 
promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. 
*/

function promedio(arr) {
  let numeroMax = Math.max(...arr);
  let numeroMin = Math.min(...arr);

  let promedio = (numeroMax + numeroMin) / 2;

  return promedio;
}

console.log(promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
