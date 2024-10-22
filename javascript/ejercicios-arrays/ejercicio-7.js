/* 
Crea una función que reciba un array de nombres y una cadena de texto. 
La función debe devolver un nuevo array con aquellos nombres que terminen con la cadena de texto proporcionada.
*/

/**
 *
 * @param {string[]} arr
 * @param {string} cadena
 * @returns {string[]}
 */

const retornarNombres = (arr, cadena) => {
  return arr.filter((elementos) => elementos.endsWith(cadena));
};

const nombres = ["Mayer", "Andres", "Luis", "Carlos"];

console.log(retornarNombres(nombres, "s"));

// Segunda manera de resolver el ejercicio ✅
function retornarNombres(arr, cadena) {
  let nombresQueTerminan = [];

  const ultimoCaracter = cadena.slice(-1);

  for (let i = 0; i < arr.length; i++) {
    const ultimoCaracterNombre = arr[i].slice(-1);

    if (ultimoCaracterNombre === ultimoCaracter) {
      nombresQueTerminan.push(arr[i]);
    }
  }

  return nombresQueTerminan;
}

console.log(retornarNombres(nombres, "s"));
