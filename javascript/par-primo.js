/* Código para comprobar si un número es Par o Impar ✅ */

const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return `${number} es número Par`;
  }
  return `${number} es número Impar`;
};

console.log(oddOrEven(4)); // 4 es número Par
console.log(oddOrEven(5)); // 5 es número Impar

// Utilizando Operador Ternario - Número Par o Impar
const oddEven = (number) => {
  return number % 2 === 0
    ? `${number} es número Par`
    : `${number} es número Impar`;
};

oddEven(2); // 2 es número Par
oddEven(3); // 3 es número Impar

/* Código para comprobar si un número es Primo */
const isPrime = (numero) => {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i < numero; i++) { // 2  < 3, si
    if (numero % i === 0) { // 3 % 2 === 0, no
      return false;
    }
  }

  return true;
};

console.log(isPrime(3)); // 3 es numero primo, true.
console.log(isPrime(4)); // 4 no es numero primo, false.
