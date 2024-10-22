/* 
Encontrar el Mayor y Menor:  
Escribe una función que tome un arreglo de números como parámetro y devuelva el número mayor en ese arreglo.
*/

const numeroMayor = (numeros) => {
  // Asumimos que el numero mayor es el primer elemento del arreglo
  let mayor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
};

// Utilizando el método Math.max() ✅
function devolverMayor(numeros) {
  // Hacemos un spread del arreglo de números
  return Math.max(...numeros);
}

// Ejemplo de uso ✅
const numeros = [6, 2, 8, 24, 80, 3, 131, 66, 24, 5];
console.log(numeroMayor(numeros));
