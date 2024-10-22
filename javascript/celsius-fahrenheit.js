/* 
Escribe un programa que convierta grados Celsius a grados Fahrenheit.
El usuario debe ingresar la temperatura en grados Celsius,
y el programa debe mostrar el equivalente en grados Fahrenheit.
*/

/**
 * Convertir grados Celsius a grados Fahrenheit
 *
 * @param {number} celsius
 * @return {string}
 */
const celsiusFahrenheit = (celsius) => {
  // Comprobamos que el dato a ingresar sea un número
  if (typeof celsius !== "number") {
    return "La temperatura debe ser un número";
  }
  const convertToFahrenheit = (celsius * 9) / 5 + 32;
  const conversionMessage = `${celsius}°C = ${convertToFahrenheit}°F`;
  return conversionMessage;
};

console.log(celsiusFahrenheit(2)); // 2°C = 35.6°F
