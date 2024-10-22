/* Convertir la función consultarAPI a una función async usando async/await

    function consultarAPI(url) {
  return new Promise((resolve, reject) => {
    const exito = true;
    setTimeout(() => {
      if (exito) {
        resolve(`Los datos de ${url} han sido obtenidos correctamente`);
      } else {
        reject(`Hubo un error al consultar la API ${url}`);
      }
    }, 2500);
  });
}
*/

function consultarAPI(url) {
  return new Promise((resolve, reject) => {
    const exito = true;
    setTimeout(() => {
      if (exito) {
        resolve(`Los datos de ${url} han sido obtenidos correctamente`);
      } else {
        reject(`Hubo un error al consultar la API ${url}`);
      }
    }, 2500);
  });
}

async function obteniendoDatosAPI() {
  try {
    const response = await consultarAPI(
      "https://rickandmortyapi.com/api/character"
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

obteniendoDatosAPI();
