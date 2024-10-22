/*
Crea una función fetchDataWithResolver que resuelva una promesa con el valor de la respuesta 
de una petición a https://jsonplaceholder.typicode.com/posts/1.
*/

const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        response.ok ? resolve(response.json()) : "Error en la respuesta";
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const fetchDataWithResolver = (url) => {
  const { promise, resolve, reject } = Promise.withResolvers();

  fetch(url)
    .then((response) => {
      response.ok ? resolve(response.json()) : "Error en la respuesta";
    })
    .catch((error) => {
      reject(error);
    });

  return promise;
};
const response = fetchDataWithResolver(
  "https://jsonplaceholder.typicode.com/posts/1"
);

response
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
