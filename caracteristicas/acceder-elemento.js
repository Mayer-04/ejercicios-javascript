// Acceder a un elemento de un arreglo
const colores = ["rojo", "azul", "verde", "amarillo", "negro"];
const color = colores[2];
console.log(color); // "verde"

// Acceder al ultimo elemento de un arreglo
const ultimoColor = colores[colores.length - 1];
console.log(ultimoColor); // "negro"

// Utilizando el método at() ✅
const animales = ["perro", "gato", "loro", "gallina", "tortuga"];
const ultimoAnimal = animales.at(5);
console.log(ultimoAnimal); // undefined
