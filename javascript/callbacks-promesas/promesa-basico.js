// Objetivo: Escribir una función que devuelva una promesa que se resuelva después de un cierto tiempo.

function promesaRetrasada(tiempo) {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(`Resuelta en ${tiempo} milisegundos`);
    }, tiempo);
  });
}

promesaRetrasada(3000)
  .then((data) => {
    console.log(`Promesa exitosa: ${data}`);
  })
  .catch((error) => {
    console.error("Hubo un error:", error);
  });
