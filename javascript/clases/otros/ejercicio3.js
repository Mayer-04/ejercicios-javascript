/*
* Ejercicio 3: Herencia
Objetivo: Reutilizar código entre clases relacionadas.

Instrucciones: 

Crea una clase base Animal con:
- Propiedad nombre.
- Método `hacerSonido()` que diga "Hace un sonido genérico".

Luego, crea una subclase Perro que:
- Hereda de Animal.
- Sobrescribe el método `hacerSonido()` para decir "Guau guau".

Explicación: Aquí aplicas la herencia para extender funcionalidad y también introduces la sobreescritura de métodos.
*/

class Animal {
  nombre;

  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    "Hace un sonido genérico";
  }
}

const zeus = new Animal("bulldog");

class Perro extends Animal {
  constructor(nombre) {
    super(nombre);
  }

  hacerSonido() {
    console.log("Guau guau");
  }
}

const dalmata = new Perro("dalmata");
console.log(dalmata.nombre);
dalmata.hacerSonido();
