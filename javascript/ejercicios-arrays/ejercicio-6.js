/* 
Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente. 
miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. 
*/

// Utilizando el nuevo método de JavaScript toSorted
function dosArreglos(arr) {
  const ascendente = arr.toSorted();
  const descendiente = arr.toSorted((a, b) => b - a);

  return {
    asc: ascendente,
    desc: descendiente,
  };
}

console.log(dosArreglos([7, 5, 7, 8, 6]));

// Segunda manera de realizar el ejercicio ✅
const dosArreglos = (arr) => {
  const copia = [...arr];
  const objeto = {};
  const ascendente = arr.sort();
  const descendiente = copia.sort((a, b) => b - a);

  objeto.asc = ascendente;
  objeto.desc = descendiente;

  return objeto;
};
