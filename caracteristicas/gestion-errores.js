/*
* Gestión de errores:
- throw: Se utiliza para lanzar una excepción de forma explícita. 
Puede ser cualquier tipo de dato, pero comúnmente es un objeto de tipo Error.
- finally: Es un bloque opcional que se ejecuta después de try y catch, sin importar si ocurrió o no un error. 
Es útil para realizar limpiezas o liberación de recursos.
- try...catch: Se utiliza para envolver el código que puede producir errores. 
Si ocurre un error dentro del bloque try, la ejecución se transfiere al bloque catch.

* Tipos de errores:
- SyntaxError: Error de sintaxis en el código.
- Error: El tipo de error genérico.
- TypeError: Error relacionado con el tipo de dato.
- ReferenceError: Error relacionado con una referencia no válida.
- RangeError: Error cuando un valor no está dentro de un rango permitido.
- EvalError: Error de evaluación.
*/

// Definición de una función que lanza un error
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

try {
  // Intentar ejecutar el código que puede fallar
  let resultado = dividir(10, 0);
  console.log(`Resultado: ${resultado}`);
} catch (error) {
  // Capturar y gestionar el error
  console.error(`Error: ${error.message}`);
} finally {
  // Código que siempre se ejecuta, ocurra o no un error
  console.log("Operación de división finalizada.");
}

/**
 * Valida si la edad es un número entre 0 y 120.
 *
 * @param {number} edad
 * @throws {TypeError} Si la edad no es un número.
 * @throws {RangeError} Si la edad no está entre 0 y 120.
 * @returns {boolean} true si la edad es válida.
 */
function validarEdad(edad) {
  if (typeof edad !== "number") {
    throw new TypeError("La edad debe ser un número");
  }
  if (edad < 0 || edad > 120) {
    throw new RangeError("La edad debe estar entre 0 y 120");
  }
  return true;
}

try {
  validarEdad("veinte");
} catch (error) {
  if (error instanceof TypeError) {
    console.error("Error de tipo:", error.message);
  } else if (error instanceof RangeError) {
    console.error("Error de rango:", error.message);
  } else {
    console.error("Error desconocido:", error.message);
  }
}
