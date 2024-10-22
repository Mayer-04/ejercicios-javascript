/*
Crea una clase base llamada Animal con propiedades como nombre y edad. 
Luego, extiende esta clase para crear una subclase llamada Perro. 
La subclase Perro debe tener una propiedad adicional llamada raza. 
Además, agrega un método a la subclase Perro llamado ladrar que imprima en la consola: "¡Guau!".
*/

class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

class Perro extends Animal {
  constructor(nombre, edad, raza) {
    super(nombre, edad);
    this.raza = raza;
  }

  ladrar() {
    return "¡Guau!";
  }
}

// const animal1 = new Animal("Lucas", 25);
const perro = new Perro("Apolo", 50, "Labrador");
console.log({
  perro,
  ladrar: perro.ladrar(),
});
