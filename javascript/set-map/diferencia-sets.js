/* 
Crea dos sets y escribe una función que devuelva un nuevo set que contenga los elementos 
que están presentes en el primer set pero no en el segundo.
*/

const diferenciaSets = function (set1, set2) {
  const nuevoSet = new Set();

  for (const elemento of set1) {
    if (!set2.has(elemento)) {
      nuevoSet.add(elemento);
    }
  }

  return nuevoSet;
};

const differenceSets = (set1, set2) => {
  const difference = new Set(set1);

  for (const element of set2) {
    difference.delete(element);
  }

  return difference;
};

const primerSet = new Set(["JavaScript", "Go", "Rust"]);
const segundoSet = new Set(["Ruby", "Java", "Rust", "C"]);

console.log(diferenciaSets(primerSet, segundoSet)); // Set(2) { 'JavaScript', 'Go' }
