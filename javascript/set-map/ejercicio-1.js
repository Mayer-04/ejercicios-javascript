/* Cree una función unique(arr) que debería devolver un array con elementos únicos de arr. */

function unique(arr) {
  return [...new Set(arr)];
}

// Ejemplo de uso ✅
const palabras = ["hola", "hola", "saludo", "tienda", "casa", "tienda"];
console.log(unique(palabras));
