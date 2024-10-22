/* 
Programa una función que cuente el número de caracteres de una cadena de texto. 
- Haz todas las validaciones necesarias. 
*/

const numeroCaracteres = (cadena) => {
  if (!cadena) {
    console.warn("Ingresa una cadena de texto");
    return `Ingresa una cadena de texto`;
  }

  if (typeof cadena !== "string") {
    console.error(`${cadena} no es una cadena texto`);
    return `Ingresa una cadena texto`;
  }

  return cadena.length;
};

// Ejemplo de uso 😁
console.log(numeroCaracteres("Avión"));
