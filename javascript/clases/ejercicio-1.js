/* 
Crea una clase llamada Producto que tenga las siguientes propiedades: nombre, precio y cantidad. 
Además, incluye un método llamado calcularTotal que devuelva el precio total del producto (precio * cantidad).
*/

class Producto {
  #nombre;
  #precio;
  #cantidad;

  constructor(nombre, precio, cantidad) {
    this.#nombre = nombre;
    this.#precio = precio;
    this.#cantidad = cantidad;
  }

  get nombre() {
    return this.#nombre;
  }

  get precio() {
    return this.#precio;
  }

  get cantidad() {
    return this.#cantidad;
  }

  calcularTotal() {
    const total = this.#precio * this.#cantidad;
    return `El precio total del producto es ${total}`;
  }
}

const producto1 = new Producto("Camisa", 20000, 3);

producto1.calcularTotal();

// Segunda forma ✅
class Producto2 {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  calcularTotal() {
    return `El precio total del producto es ${this.precio * this.cantidad}`;
  }
}