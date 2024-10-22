/*
Dado un array de números, crea una función que devuelva un nuevo array con solo los elementos pares. 
*/

const elementosPares = (pares) => {
  const numerosPares = pares.filter((par) => par % 2 === 0);
  return numerosPares;
};

// Resolviendo el ejercicio sin el método filter 😁
function retornarNumerosPares(numeros) {
  let numerosPares = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      numerosPares.push(numeros[i]);
    }
  }
  return numerosPares;
}

// Ejemplo de uso ✅
const numeros = [2, 5, 1, 8, 5, 9, 53, -1, 6, 24, 80, 3];
const soloPares = elementosPares(numeros);
console.log(soloPares);
