/* 
Unión de arrays: Escribe una función que tome dos arrays y devuelva un nuevo array que sea la unión de ambos, 
eliminando duplicados.
*/

const unionArreglos = (array1, array2) => {
  const arreglo1 = new Set(array1);
  const arreglo2 = new Set(array2);
  const unionArrays = [...arreglo1, ...arreglo2];
  return unionArrays;
};

// Forma simplificada 😁
const unionArrays = function (array1, array2) {
  const unionArreglos = [...new Set([...array1, ...array2])];
  return unionArreglos;
};

// Ejemplo de uso ✅
const numeros = [1, 2, 3, 4, 5];
const numeros2 = [6, 7, 8, 9, 10];

console.log(unionArrays(numeros, numeros2));
