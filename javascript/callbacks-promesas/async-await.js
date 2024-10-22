/* 
    Convierte esta función que retorna una promesa con async/await:

    function descargarArchivo() {
        return new Promise((resolve, reject) => {
        const exito = true;
        setTimeout(() => {
      if (exito) {
        resolve("El archivo se ha descargado exitosamente");
      } else {
        reject("Hubo un error al descargar el archivo");
      }
    }, 3000);
  });
}

*/

function descargarArchivo() {
  return new Promise((resolve, reject) => {
    const exito = true;
    setTimeout(() => {
      if (exito) {
        resolve("El archivo se ha descargado exitosamente");
      } else {
        reject("Hubo un error al descargar el archivo");
      }
    }, 3000);
  });
}

// Async/await ✅
const archivoDescargado = async () => {
  try {
    const archivo = await descargarArchivo();
    console.log(archivo);
  } catch (error) {
    console.error(error);
  }
};

archivoDescargado();
