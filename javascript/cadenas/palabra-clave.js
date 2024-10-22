/* 
Escribe una función que tome una cadena y una palabra clave como entrada. 
La función debería devolver un booleano que indique si la palabra clave aparece en la cadena. 
Asegúrate de que la búsqueda no distinga entre mayúsculas y minúsculas. 
*/

function palabraClave(cadena, clave) {
  const cadenaMinuscula = cadena.toLowerCase();
  const claveMinuscula = clave.toLowerCase();

  if (cadenaMinuscula.includes(claveMinuscula)) {
    return true;
  }
  return false;
}

console.log(palabraClave("Mayer", "YER"));

// Segunda manera de realizar el ejercicio ✅
function palabraClave(cadena, clave) {
  const regex = new RegExp(clave, "i");
  return regex.test(cadena);
}

console.log(palabraClave("Mayer", "YER"));
