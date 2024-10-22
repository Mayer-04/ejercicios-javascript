/* 
Tienes un array de objetos, donde cada objeto representa una persona con las propiedades nombre y edad. 
Tu objetivo es utilizar el método every para verificar si todas las personas en el array son mayores de 18 años. 
Debes escribir una función que tome como argumento el array de objetos y devuelva un valor booleano que indique
si se cumple la condición. 
*/

const mayoresDeEdad = function (mayor) {
  return mayor.every((e) => e.edad > 18);
};

// Segunda manera de hacer el ejercicio 😁
function mayorDeEdad(personas) {
  for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad <= 18) {
      return false;
    }
  }
  return true;
}

// Ejemplo de uso ✅
const personas = [
  { nombre: "Mayer", edad: 23 },
  { nombre: "Andres", edad: 22 },
  { nombre: "Lucas", edad: 20 },
  { nombre: "Luis", edad: 50 },
];

console.log(mayorDeEdad(personas)); // devuelve true, todos cumplen la condición.
