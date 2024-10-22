/* 
Escribe una función que tome una cadena de texto y un carácter específico, 
y devuelva el número de veces que ese carácter aparece en la cadena. 
*/

/**
 *
 * @param {string} texto
 * @param {string} caracter
 * @return {number}
 */
const contarCaracteres = function (texto, caracter) {
  let numeroCaracteres = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === caracter) {
      numeroCaracteres++;
    }
  }
  return numeroCaracteres;
};

// Ejemplo de uso 😁
const palabra = "paisaje";
console.log(contarCaracteres(palabra, "a"));
