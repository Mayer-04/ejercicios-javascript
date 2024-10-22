/*
- Introducido en ECMAScript 2022
- Permite el encadenamiento de excepciones.
- Cuando un error es causado por otro error anterior y queremos obtener el error original mientras manejamos
o lanzamos un nuevo error.
- Al propagar errores con una causa, puedes hacer seguimiento al flujo del error desde su origen hasta su lugar de manejo.
- Saber exactamente dónde se originó el problema y cómo evolucionó hace más sencillo depurar.

* Propiedad cause:
- El nuevo error puede "explicar" que fue causado por un error anterior. 
*/

function getData() {
  try {
    throw new Error("Database connection failed");
  } catch (error) {
    // Aquí reenviamos el error con la propiedad 'cause' para no perder el contexto del error original
    throw new Error("Error fetching data", { cause: error });
  }
}

try {
  getData();
} catch (error) {
  console.error(error.message); // "Error fetching data"
  console.error(error.cause.message); // "Database connection failed"
}
