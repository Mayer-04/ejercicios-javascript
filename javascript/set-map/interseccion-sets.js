/* 
Define dos sets con algunos elementos comunes y crea una función que tome estos dos sets como entrada
y devuelva un nuevo set que contenga solo los elementos que están presentes en ambos sets. 
*/

function getIntersection(setA, setB) {
  const intersection = new Set();
  for (const element of setA) {
    if (setB.has(element)) {
      intersection.add(element);
    }
  }
  return intersection;

  // return new Set([...setA].filter(element => setB.has(element)));
}

const primerSet = new Set(["🦊", "🫎", "🐺"]);
const segundoSet = new Set(["🦊", "🐕", "🦍", "🫎"]);
console.log(interseccionSet(primerSet, segundoSet));
