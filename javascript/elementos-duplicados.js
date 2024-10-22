/* 
Eliminar Duplicados: 
Crea una función que tome un arreglo como entrada y devuelva un nuevo arreglo sin elementos duplicados.
Sin utilizar new Set().
*/

/**
 *
 * @param {string[]} arr
 * @returns {string[]}
 */

function elementosDuplicados(arr) {
  let duplicados = [];
  for (let i = 0; i < arr.length; i++) {
    if (duplicados.indexOf(arr[i]) === -1) {
      duplicados.push(arr[i]);
    }
  }
  return duplicados;
}

function elementosDuplicados2(arr) {
  const hash = {};
  const noDuplicados = [];
  for (let i = 0; i < arr.length; i++) {
    const elemento = arr[i];
    if (!hash[elemento]) {
      hash[elemento] = true;
      noDuplicados.push(elemento);
    }
  }
  return noDuplicados;
}

function eliminateDuplicates(arr) {
  const uniqueElements = [];
  for (const element of arr) {
    if (!uniqueElements.includes(element)) {
      uniqueElements.push(element);
    }
  }
  return uniqueElements;
}

// Ejemplo de uso ✅
const nombres = [
  "Andres",
  "Juan",
  "Andres",
  "Andres",
  "Carlos",
  "Juan",
  "Sofia",
];

console.log(elementosDuplicados(nombres));
