/* 
Crear una Clase para un Estudiante.
Crea una clase llamada Estudiante con las propiedades nombre, edad y carrera. 
Implementa métodos get y set para cada una de estas propiedades. Además, añade un método esMayorDeEdad 
que devuelva true si el estudiante es mayor de 18 años y false en caso contrario.
*/

class Estudiante {
  #nombre;
  #edad;
  #carrera;

  constructor(nombre, edad, carrera) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#carrera = carrera;
  }

  get nombre() {
    return this.#nombre;
  }

  get edad() {
    return this.#edad;
  }

  get carrera() {
    return this.#carrera;
  }

  esMayorEdad() {
    return this.#edad > 18;
  }
}

const estudiante1 = new Estudiante("Andres", 23, "Programación");

console.log(estudiante1.esMayorEdad());
console.log(estudiante1.nombre);
console.log(estudiante1.edad);
