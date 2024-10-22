/*
Crea dos funciones:

- getResolvedPromise: 
Esta función debe devolver una promesa que se resuelva después de 2 segundos con el mensaje "Promesa resuelta".
- getRejectedPromise: 
Esta función debe devolver una promesa que se rechace después de 1 segundo con el mensaje "Promesa rechazada".

- Usa Promise.allSettled con llamadas a estas funciones. Luego, imprime los resultados.
*/

function getResolvedPromise() {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve("Promesa resuelta");
    }, 2000);
  });
}

function getRejectedPromise() {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject("Promesa rechazasa");
    }, 1000);
  });
}

Promise.allSettled([getResolvedPromise(), getRejectedPromise()])
  .then((results) =>
    results.map((result) => {
      // console.log(results[0].value, results[1].reason)
      if (result.status === "fulfilled") {
        console.log(result.value);
      } else if (result.status === "rejected") {
        console.log(result.reason);
      }
    })
  )
  .catch((error) => console.log(error));
