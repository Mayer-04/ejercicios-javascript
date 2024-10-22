/* 
Programa una función que dada una cadena de texto cuente el número de vocales y consonantes. 
miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/

function vocalesConsonantes(texto) {
  const consonantes = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "x",
    "z",
    "w",
    "y",
  ];
  const vocales = ["a", "e", "i", "o", "u"];

  const textoConvertido = texto.toLowerCase();

  let numeroConsonantes = 0;
  let numeroVocales = 0;

  for (let i = 0; i < textoConvertido.length; i++) {
    if (consonantes.includes(textoConvertido[i])) {
      numeroConsonantes++;
    } else if (vocales.includes(textoConvertido[i])) {
      numeroVocales++;
    }
  }

  return `La palabra "${texto}" tiene ${numeroConsonantes} consonantes y ${numeroVocales} vocales.`;
}

// Ejemplo de uso 😁
console.log(vocalesConsonantes("Hola mundo"));
