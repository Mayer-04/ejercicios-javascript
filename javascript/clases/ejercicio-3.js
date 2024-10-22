/* 
Crear una Clase para una Cuenta Bancaria
Crea una clase llamada CuentaBancaria con las propiedades saldo y nombreTitular. 
Los métodos get deben devolver el saldo actual y el nombre del titular, respectivamente. 
Los métodos set deben permitir actualizar tanto el saldo como el nombre del titular.
*/

class CuentaBancaria {
  constructor(saldo, nombreTitular) {
    this.saldo = saldo;
    this.nombreTitular = nombreTitular;
  }

  get saldoActual() {
    return `El saldo actual es: ${this.saldo}`;
  }

  get titular() {
    return `El nombre del titular es: ${this.nombreTitular}`;
  }

  /**
   * Actualiza el saldo
   *
   * @param {number} cantidad
   * @throws {Error}
   */
  set actualizarSaldoActual(cantidad) {
    if (typeof cantidad === "number") {
      this.saldo = cantidad;
    } else {
      throw new Error(`Debes ingresar un número`);
    }
  }

  /**
   * Actualiza el nombre del titular
   *
   * @param {string} nombre
   */
  set actualizarTitular(nombre) {
    this.nombreTitular = nombre;
  }
}

const banco = new CuentaBancaria(10000, "Lucas");
banco.saldoActual;
banco.actualizarSaldoActual = 20000;
console.log(banco);
