/* Objetivo: Escribir una función retraso que acepte un número y un callback, y luego ejecute el callback 
después de esperar el número de milisegundos especificado.
Debería imprimir "¡El tiempo ha terminado!" después de 2 segundos. 
*/

function retraso(numero, callback) {
  setTimeout(() => {
    callback();
  }, numero);
}

function miCallback() {
  console.log("¡El tiempo ha terminado!");
}

retraso(2000, miCallback);
