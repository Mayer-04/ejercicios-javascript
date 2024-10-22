/* 
Dado un array de números, crea una copia superficial de la primera mitad del array utilizando el método slice. 
Luego, muestra en consola tanto el array original como la copia.
*/

function copiaDeSeguridad(arr) {
  const copia = arr.slice(0, arr.length / 2);
  console.log(arr); // [1,2,3,4,5,6,7,8]
  console.log(copia); // [ 1, 2, 3, 4 ]
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
copiaDeSeguridad(numeros);
