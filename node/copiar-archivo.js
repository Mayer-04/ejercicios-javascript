/* Escribe un script que utilice fs para copiar el contenido de un archivo a otro. 
Asegúrate de manejar posibles errores y proporcionar mensajes informativos. 
*/

const fs = require("node:fs");
const path = require("node:path");

const firstFilePath = path.join(__dirname, "archivo1.txt");
const secondFilePath = path.join(__dirname, "archivo2.txt");

fs.copyFile(firstFilePath, secondFilePath, (err) => {
  if (err) {
    console.error(err);
  }
});
