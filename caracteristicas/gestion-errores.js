/*
* Gestión de errores:
- throw: Se utiliza para lanzar una excepción de forma explícita. 
Puede ser cualquier tipo de dato, pero comúnmente es un objeto de tipo Error.
* Ejemplo: throw new Error("Mensaje de error");
- finally: Es un bloque opcional que se ejecuta después de try y catch, sin importar si ocurrió o no un error.
Es útil para realizar limpiezas o liberación de recursos, como cerrar archivos o conexiones.
- try...catch: Se utiliza para envolver el código que puede producir errores.
Si ocurre un error dentro del bloque try, la ejecución se transfiere al bloque catch.
* Ejemplo:
 *   try {
 *     // Código que puede fallar
 *   } catch (error) {
 *     // Manejo del error
 *   } finally {
 *     // Código que siempre se ejecuta
 *   }

* Tipos de errores:
- SyntaxError: Error de sintaxis en el código. Ocurre cuando el código no sigue la sintaxis correcta de JavaScript.
- Error: El tipo de error genérico. Es la clase base para todos los errores.
- TypeError: Error relacionado con el tipo de dato. Ocurre cuando se utiliza un valor de un tipo inesperado.
- ReferenceError: Error relacionado con una referencia no válida. Ocurre cuando se intenta acceder a una variable o función que no existe.
- RangeError: Error cuando un valor no está dentro de un rango permitido. Ocurre cuando se intenta usar un valor fuera de los límites permitidos.
- EvalError: Error de evaluación. Ocurre cuando se usa la función `eval` de manera incorrecta.
*/

/**
 * Divide dos números y lanza un error si el divisor es cero.
 *
 * @param {number} a - El dividendo.
 * @param {number} b - El divisor.
 * @throws {Error} Si el divisor es cero.
 * @returns {number} El resultado de la división.
 */
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
 * @param {number} edad - La edad a validar.
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

/**
 * Función genérica para manejar errores y registrar información.
 *
 * @param {Function} fn - Función a ejecutar dentro de un bloque try...catch.
 * @param {...any} args - Argumentos a pasar a la función.
 * @returns {any|null} Resultado de la función si no hay error, de lo contrario null.
 */
function manejarErrores(fn, ...args) {
  try {
    return fn(...args);
  } catch (error) {
    console.error(`Error en la función ${fn.name}:`, error.message);
    return null;
  }
}

// Uso de la función manejarErrores.
const resultadoSeguro = manejarErrores(dividir, 10, 0);
const edadValida = manejarErrores(validarEdad, 25);
