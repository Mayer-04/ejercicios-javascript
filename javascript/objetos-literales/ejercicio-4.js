/* 
Tenemos un objeto que almacena los salarios de nuestro equipo:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

Escribe el código para sumar todos los salarios y almacenar el resultado en la variable sum. 
En el ejemplo de arriba nos debería dar 390.

Si salaries está vacío entonces el resultado será 0.
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (const key in salaries) {
  sum += salaries[key];
}

// Segunda manera de realizar el ejercicio ✅
const convertir = Object.values(salaries);
let suma = 0;

convertir.forEach((salarie) => (suma += salarie));

console.log(suma);
