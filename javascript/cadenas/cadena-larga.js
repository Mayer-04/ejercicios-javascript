/*
* Longitud de la palabra más larga

Crea una función que encuentre la palabra más larga en una cadena de texto y 
devuelva su longitud como número entero.

Ejemplo: En "El zorro salta sobre el perro", la palabra más larga 
es "sobre" (5 caracteres), por lo que la función debe retornar 5.
*/

const cadenaMasLarga = function (cadena) {
  const convertir = cadena.split(" ");

  let longitudCadena = 0;

  for (let i = 0; i < convertir.length; i++) {
    if (convertir[i].length > longitudCadena) {
      longitudCadena = convertir[i].length;
    }
  }

  return longitudCadena;
};

console.log(cadenaMasLarga("Esto es una cadena de texto de ejemplo")); // 7

// Segunda manera de realizar el ejercicio ✅
const cadenaLarga = (cadena) => {
  const convertir = cadena.split(" ");

  const recorrer = convertir.map((element) => {
    return element.length;
  });

  const longitudMaxima = Math.max(...recorrer);
  return longitudMaxima;
};

console.log(cadenaLarga("El zorro salta sobre el perro")); // 5
