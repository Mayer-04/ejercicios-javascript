/*
* Ejercicio 1: Clases y Objetos (Base de POO).
Objetivo: Entender cómo definir clases y crear objetos.

Instrucciones: 

Crea una clase Persona con:
- Un constructor que reciba nombre y edad.
- Un método `saludar()` que imprima "Hola, mi nombre es [nombre] y tengo [edad] años."

Explicación:
- Este ejercicio te permite comenzar a usar clases y ver cómo instanciar objetos a partir de ellas.
- Practicarás la estructura básica y uso de this.
*/

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const persona1 = new Persona("Mayer", 25);
persona1.saludar(); // Hola, mi nombre es Mayer y tengo 25 años.
