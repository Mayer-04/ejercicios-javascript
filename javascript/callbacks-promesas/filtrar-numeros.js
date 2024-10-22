/* 
Crea una función llamada filtrarPares que tome una matriz de números y un callback como argumentos. 
La función debería filtrar los números pares de la matriz y luego llamar al callback con el nuevo arreglo.
*/

const filtrarPares = function (numeros, callback) {
  const numerosPares = numeros.filter((par) => par % 2 === 0);
  callback(numerosPares);
};

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

filtrarPares(listaNumeros, (pares) => {
  console.log(pares);
});
