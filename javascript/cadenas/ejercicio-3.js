/* 
Programa una función para contar el número de veces que se repite una palabra en un texto largo. 
miFuncion("hola mundo adios mundo", "mundo") devolverá 2. 
*/

function contarPalabra(texto, palabra) {
  let palabras = texto.split(" ");
  let veces = 0;
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] === palabra) {
      veces++;
    }
  }
  return veces;
}

// Ejemplo de uso 😁
console.log(contarPalabra("hola mundo adios mundo", "mundo"));
