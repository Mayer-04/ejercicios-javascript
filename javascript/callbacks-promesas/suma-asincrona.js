/* 
Escribe una función llamada sumarAsincrono que tome dos números como argumentos y un callback.
La función debería sumar los dos números y luego llamar al callback con el resultado.
*/

function sumarAsincrono(numero1, numero2, callback) {
  const resultado = numero1 + numero2;
  callback(resultado);
}

sumarAsincrono(10, 34, (resultado) => {
  console.log(`La suma de los numeros es ${resultado}`);
});
