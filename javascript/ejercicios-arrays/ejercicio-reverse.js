/* 
Implementa una función en JavaScript llamada reverseArray que tome un array como argumento y devuelva un nuevo array
con los elementos en orden inverso. No puedes utilizar metodos de array para resolver este ejercicio.
*/

const reverseString = (arreglo) => {
  let arr = [];
  for (let i = arreglo.length - 1; i >= 0; i--) {
    arr = [...arr, arreglo[i]];
  }

  return arr;
};

// Ejemplo de uso ✅
const palabra = ["Avion", "Carro", "Moto"];
console.log(reverseString(palabra));
