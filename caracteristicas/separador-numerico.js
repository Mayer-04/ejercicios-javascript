/*
* Separador numerico
- Utilizamos el operador `toLocaleString` para separar el valor de un número con el separador de miles y decimales.
*/

const numero = 123456.789;
console.log(numero.toLocaleString()); // 123.456,789

// Utilizando la barra baja para separar el separador de miles
const numero2 = 1_000_000;
console.log(numero2); // 1000000
console.log(numero2 === 1000000); // true
