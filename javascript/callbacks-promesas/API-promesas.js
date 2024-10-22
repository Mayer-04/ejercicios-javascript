/* 
Crea una función llamada consultarAPI que tome una URL como argumento y devuelva una promesa. 
La promesa debe resolver con la respuesta de la API si la solicitud fue exitosa, o rechazar con un error
si hubo un problema.
*/

function consultarAPI(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

consultarAPI("https://rickandmortyapi.com/api/character")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
