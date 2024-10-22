/* 
Objetivo: Escribir una función que devuelva una promesa que se resuelva si se cumple una cierta condición, 
y se rechace si no se cumple.
*/

function promesaConCondicion(condicion) {
  return new Promise((resolve, reject) => {
    if (condicion) {
      resolve("La condición fue verdadera");
    } else {
      reject("La condición fue falsa");
    }
  });
}

promesaConCondicion(true)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
