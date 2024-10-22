/* 
Objetivo: Escribir una función combinarPromesas que acepte dos promesas y que espere a que ambas se resuelvan.
La función debe devolver un array con los resultados de ambas promesas en el mismo orden en el que se resolvieron.
*/

const promesa1 = new Promise((resolve) => {
  resolve("Promesa 1 resuelta");
});

const promesa2 = new Promise((resolve) => {
  resolve("Promesa 2 resuelta");
});

function combinarPromesas(promesa1, promesa2) {
  return Promise.all([promesa1, promesa2]);
}

combinarPromesas(promesa1, promesa2)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
