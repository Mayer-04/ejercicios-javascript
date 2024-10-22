/* 
Encuentra la palabra más larga en una cadena.
Devuelve la longitud de la palabra más larga en la oración proporcionada.

Tu respuesta debe ser un número. 
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

console.log(cadenaMasLarga("Esto es una cadena de texto de ejemplo"));

// Segunda manera de realizar el ejercicio ✅
const cadenaLarga = (cadena) => {
  const convertir = cadena.split(" ");

  const recorrer = convertir.map((element) => {
    return element.length;
  });

  const longitudMaxima = Math.max(...recorrer);
  return longitudMaxima;
};

console.log(cadenaLarga("Esto es una cadena de texto de ejemplo"));
