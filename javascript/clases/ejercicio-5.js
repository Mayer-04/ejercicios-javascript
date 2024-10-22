/*
Contador de Instancias:
Crea una clase Contador que tenga una propiedad estática llamada contador que llevará la cuenta de cuántas
instancias de la clase se han creado.
La clase deberá tener un constructor que incremente el contador en uno cada vez que se crea una nueva instancia.
*/

class Contador {
  static contador = 0;

  constructor() {
    Contador.contador++;
  }

  static get instancias() {
    return Contador.contador;
  }
}

// Ejemplo de uso
const instancia1 = new Contador();
const instancia2 = new Contador();
const instancia3 = new Contador();

console.log(
  `Se han creado ${Contador.instancias} instancias de la clase Contador.`
);
