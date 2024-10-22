/* 
Crea tres promesas:

La primera promesa (promise1) debe resolverse después de 1 segundo con el mensaje "Primera promesa resuelta".
La segunda promesa (promise2) debe ser rechazada después de 1.5 segundos con el mensaje "Segunda promesa rechazada".
La tercera promesa (promise3) debe resolverse después de 2 segundos con el mensaje "Tercera promesa resuelta".
Usa Promise.allSettled para esperar a que todas las promesas se resuelvan o rechacen. Luego, imprime los resultados.
*/

const promesa1 = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve("Primera promesa resuelta");
  }, 1000);
});

const promesa2 = new Promise((_resolve, reject) => {
  setTimeout(() => {
    reject("Segunda promesa rechazada");
  }, 1500);
});

const promesa3 = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve("Tercer promesa resuelta");
  }, 2000);
});

const resolviendoPromesas = Promise.allSettled([promesa1, promesa2, promesa3]);

resolviendoPromesas
  // Tambien se puede desestructurar el results = [promesa1, promesa2, promesa3]
  .then((results) => console.log(results))
  .catch((error) => console.error(error));
