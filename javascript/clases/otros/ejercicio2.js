/*
* Ejercicio 2: Encapsulamiento
Objetivo: Proteger atributos internos usando convenciones y métodos.

Instrucciones: 

Crea una clase CuentaBancaria con:
- Propiedad privada `saldo`.
- Métodos públicos `depositar(cantidad)`, `retirar(cantidad)` y `verSaldo()`.

Restricciones:

- Si se intenta retirar más dinero del disponible, debe mostrar un mensaje de error.
- Solo los métodos definidos dentro de la clase podran acceder a saldo.

Explicación: Aquí usarás los campos privados (con #) de JavaScript y practicarás cómo controlar el acceso
a los datos internos de un objeto.

Este ejercicio es sobre encapsulamiento en JavaScript. 
Es un principio de la programación orientada a objetos que consiste en ocultar los detalles internos de un objeto y exponer solo lo necesario.
*/

class CuentaBancaria {
  #saldo;

  constructor(saldo) {
    this.#saldo = saldo;
  }

  depositar(cantidad) {
    if (cantidad <= 0) {
      throw new Error("La cantidad a depositar debe ser mayor a cero");
    }
    this.#saldo += cantidad;
  }

  retirar(cantidad) {
    if (cantidad > this.#saldo) {
      throw new Error("No dispones de tanto dinero");
    }

    this.#saldo -= cantidad;

    if (this.#saldo === 0) {
      console.log("No tienes fondos");
    }
  }

  verSaldo() {
    console.log(`Tu saldo actual es: ${this.#saldo}`);
  }
}

const BBVA = new CuentaBancaria(1000);
BBVA.verSaldo();
BBVA.depositar(1000);
BBVA.depositar(500);
BBVA.verSaldo();
try {
  BBVA.retirar(2400);
} catch (e) {
  console.error(e.message);
}
BBVA.verSaldo();
BBVA.retirar(100);
BBVA.verSaldo();
