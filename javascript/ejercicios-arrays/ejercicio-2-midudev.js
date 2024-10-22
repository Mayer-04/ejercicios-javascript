/* 
Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares 
en la lista. La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, 
añadirlo a la suma total. Usa el bucle que quieras para solucionarlo. 
*/

function sumarPares(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      suma += numeros[i];
    }
  }
  return suma;
}

// Utilizando forEach ✅
function paresForEach(numeros) {
  let suma = 0;
  numeros.forEach((lista) => {
    if (lista % 2 === 0) {
      suma += lista;
    }
  });
  return suma;
}

// Utilizando map ✅
const paresMap = (numeros) => {
  let suma = 0;
  numeros.map((numero) => {
    if (numero % 2 === 0) {
      suma += numero;
    }
  });
  return suma;
};

// Ejemplo de uso ✅
const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = sumarPares(listaNumeros);
console.log(resultado);
