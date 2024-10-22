/**
 * @typedef {Object} operations
 * @property {number} suma
 * @property {number} resta
 * @property {number} multiplicacion
 * @property {number} division
 * @property {number} resto
 * @property {number} exponente
 */

/**
 * Suma, resta, multiplicación, división, resto, exponente
 * @param {number} number
 * @return {operations}
 */
const multiplesOperations = (number) => {
  const convertString = number.toString();
  const firstDigit = Number(convertString[0]);
  const secondDigit = Number(convertString[1]);

  let reverseNumbers = "";

  for (let i = convertString.length - 1; i >= 0; i--) {
    const result = convertString[i];
    reverseNumbers += result;
  }

  const suma = firstDigit + secondDigit;
  const resta = firstDigit - secondDigit;
  const multiplicacion = firstDigit * secondDigit;
  const division = firstDigit / secondDigit;
  const resto = firstDigit % secondDigit;
  const exponente = firstDigit ** secondDigit;

  return {
    suma,
    resta,
    multiplicacion,
    division,
    resto,
    exponente,
  };
};

const result = multiplesOperations(73);
console.log(result);
