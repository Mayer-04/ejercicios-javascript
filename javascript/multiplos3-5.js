/* Dado un número n, encuentra la suma de todos los números que son múltiplos de 3 o 5 y que son menores que n. */

/*  
Si i no es un múltiplo de 3, entonces se evalúa i % 5 === 0. Si i es un múltiplo de 5 (i % 5 === 0 es verdadero),
entonces la expresión completa es verdadera y el valor de i se suma a la variable suma. 
*/
function multiplesNumeros(n) {
  let suma = 0;
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      suma += i;
    }
  }
  return suma;
}

console.log(multiplesNumeros(10));

// * Suma los números que son múltiplos tanto de 3 como de 5.
function multiplesNumerosConAnd(n) {
  let suma = 0;
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      suma += i;
    }
  }
  return suma;
}

console.log(multiplesNumerosConAnd(15));
