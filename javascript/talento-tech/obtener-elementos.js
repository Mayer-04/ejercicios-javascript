/* Ejercicio:
Crea una función que reciba dos array, un booleano y retorne un array.
- Si el booleano es verdadero buscará y retornará los elementos comunes de los dos array.
- Si el booleano es falso buscará y retornará los elementos no comunes de los dos array.
*/

/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns
 */
function obtenerElementosComunes(arr1, arr2) {
  return arr1.filter((elemento) => arr2.includes(elemento));
}

/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns
 */
const obtenerElementosNoComunes = (arr1, arr2) => {
  const unionOfArray = arr1.concat(arr2);
  return unionOfArray.filter(
    (elemento) => !arr1.includes(elemento) || !arr2.includes(elemento)
  );
};

const numeros1 = [1, 2, 3, 4, 5, 6];
const numeros2 = [2, 4, 6, 8, 9];

const elementosComunes = obtenerElementosComunes(numeros1, numeros2);
const elementosNoComunes = obtenerElementosNoComunes(numeros1, numeros2);

console.log("Elementos comunes:", elementosComunes);
console.log("Elementos no comunes:", elementosNoComunes);

// Segunda manera de realizar el ejercicio ✅
function obtenerElementosComunes(arr1, arr2, bool) {
  const comunes = new Set();
  const noComunes = new Set();

  arr1.forEach((elemento) => {
    if (arr2.includes(elemento)) {
      comunes.add(elemento);
    } else {
      noComunes.add(elemento);
    }
  });

  arr2.forEach((elemento) => {
    if (!arr1.includes(elemento)) {
      noComunes.add(elemento);
    }
  });

  return bool ? Array.from(comunes) : Array.from(noComunes);
}

console.log(obtenerElementosComunes(numeros1, numeros2, false));
