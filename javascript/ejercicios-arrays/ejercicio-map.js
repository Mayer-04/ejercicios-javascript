/* 
Dado un array de palabras, crea una función que devuelva un nuevo array 
con la longitud de cada palabra. 
*/

const longitudPalabras = function (palabras) {
  const longitud = palabras.map((palabra) => palabra.length);
  return longitud;
};

// Ejemplo de uso ✅
const palabras = ["Avion", "Carro", "Moto", "Bicicleta", "Barco", "Submarino"];
const resultado = longitudPalabras(palabras);
console.log(resultado);
