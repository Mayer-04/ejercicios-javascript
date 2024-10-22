/*
 * Diferentes maneras de crear objetos en JavaScript
- En JavaScript, los objetos son una colección de propiedades (valores) y métodos (funciones asociadas a los objetos).
- Existen varias maneras de crear objetos, cada una con diferentes características y casos de uso.
*/

// 1. Creación de objeto literal.
// Es la manera más directa y sencilla de crear un objeto, usando una notación de pares clave-valor.
const persona = {
  nombre: "Mayer",
  apellido: "Chaves",
  edad: 24,
};
console.log("Objeto literal:", persona);

// 2. Función constructora.
// Antes de la llegada de clases en ES6,
// las funciones constructoras eran la manera principal de crear instancias de objetos.
// Se usa la palabra clave 'this' para asignar propiedades al objeto que se crea.
function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}

const mayer = new Persona("Mayer", "Chaves", 24);
console.log("Función constructora:", mayer);

// 3. Object.create().
// 'Object.create()' permite crear un nuevo objeto que hereda las propiedades y métodos de otro objeto.
const prototipoPersona = {
  nombre: "Desconocido",
  apellido: "Desconocido",
  edad: 0,
  saludar() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}.`);
  },
};

const persona2 = Object.create(prototipoPersona);
console.log("persona2:", persona2);
persona2.nombre = "Mayer";
persona2.apellido = "Chaves";
persona2.edad = 24;
console.log("Object.create():", persona2);
persona2.saludar(); // Ejemplo de llamada a un método heredado

// 4. Object.assign().
// 'Object.assign()' copia las propiedades de uno o más objetos a un objeto destino, retornando dicho objeto.
const persona3 = Object.assign({}, persona2); // Crea una copia superficial de 'persona2'
console.log("Object.assign():", persona3);

// 5. Spread Operator (operador de propagación).
// El spread operator ('...') permite copiar propiedades de un objeto a otro de manera simple y legible.
const persona4 = { ...persona2 }; // Crea una copia superficial de 'persona2'
console.log("Spread operator:", persona4);
