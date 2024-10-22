/* 
Escribe una función que tome dos parámetros: un array de strings y un número mínimo de caracteres. 
La función debe devolver un nuevo array que contenga solo las cadenas del array original que tienen una longitud
igual o superior al número mínimo de caracteres.
*/

function longitudMinima(arr, caracteres) {
  let nuevoArr = [];
  for (const elementos of arr) {
    if (elementos.length >= caracteres) {
      nuevoArr.push(elementos);
    }
  }
  return nuevoArr;
}

const palabras = ["carro", "avion", "moto", "bicicleta", "sol"];

console.log(longitudMinima(palabras, 4));

// Segunda manera de realizar el ejercicio ✅
const longitudMinima = (arr, caracteres) => {
  return arr.filter((elementos) => elementos.length >= caracteres);
};
