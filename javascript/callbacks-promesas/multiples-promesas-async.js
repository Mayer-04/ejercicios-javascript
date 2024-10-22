/* 
Crea tres promesas:

La primera promesa (promise1) debe resolverse después de 1 segundo con el mensaje "Primera promesa resuelta".
La segunda promesa (promise2) debe resolverse después de 1.5 segundos con el mensaje "Segunda promesa rechazada".
La tercera promesa (promise3) debe resolverse después de 2 segundos con el mensaje "Tercera promesa resuelta".


Utiliza Promise.all para resolver las tres promesas y además utiliza async/await.
*/

const promesa1 = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve("Primera promesa resuelta");
  }, 1000);
});

const promesa2 = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve("Segunda promesa resuelta");
  }, 1500);
});

const promesa3 = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve("Tercer promesa resuelta");
  }, 2000);
});

// Async/Await ✅
async function resolviendoPromesas() {
  try {
    const [promesaOne, promesaTwo, promesaThree] = await Promise.all([
      promesa1,
      promesa2,
      promesa3,
    ]);

    console.log(
      ` 
          Promesa 1: ${promesaOne}
          Promesa 2: ${promesaTwo}
          Promesa 3: ${promesaThree}
        `
    );
  } catch (error) {
    console.error(error);
  }
}

resolviendoPromesas();
