/* 
Crea dos sets con valores únicos y escribe una función que tome estos dos sets como parámetros 
y devuelva un nuevo set que contenga la unión de ambos, es decir, todos los elementos distintos de ambos sets. 
*/

const unionSets = (set1, set2) => {
  const nuevoSet = new Set();
  const arr = [...new Set(set1), ...new Set(set2)];

  for (const union of arr) {
    nuevoSet.add(union);
  }
  return nuevoSet;
};

const primerSet = new Set([1, 2, 3, 4]);
const segundoSet = new Set([4, 5, 6]);

console.log(unionSets(primerSet, segundoSet));

// Segunda forma de realizar el ejercicio ✅
function unionDeSets(set1, set2) {
  let unionSet = new Set();

  for (let elemento of set1) {
    unionSet.add(elemento);
  }

  for (let elemento of set2) {
    unionSet.add(elemento);
  }
  return unionSet;
}
