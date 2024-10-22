/* 
Programa una función que elimine cierto patrón de caracteres de un texto dado. 
miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. 
*/

const eliminarPatron = (texto, patron) => {
  let convertir = texto.split(patron);
  return convertir.join("");
};

// Ejemplo de uso 😁
const resultado = eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
console.log(resultado);
