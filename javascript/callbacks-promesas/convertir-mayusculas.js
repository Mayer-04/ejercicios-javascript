/* 
Escribe una función llamada convertirMayusculas que tome una cadena de texto y un callback. 
La función debería convertir la cadena a mayúsculas y luego llamar al callback con la nueva cadena. 
*/

const convertirMayusculas = (cadena, callback) => {
  const convertirCadena = cadena.toUpperCase();

  callback(convertirCadena);
};

convertirMayusculas("javascript", (cadena) => {
  console.log(cadena);
});
