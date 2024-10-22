/* 
Tienes una función que recibe un objeto como parámetro. 
La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.

Por ejemplo: para el objeto { a: true, b: 42, c: false } la función debe retornar ['a', 'c'] 
ya que son las dos propiedades que tienen valores booleanos. 
*/

function getKeysOfBooleanValues(obj) {
  const objeto = Object.keys(obj);
  const encontrarPropiedades = objeto.filter(
    (key) => typeof obj[key] === "boolean"
  );
  return encontrarPropiedades;
}

// Forma simplificada 😁
const getKeysOfBooleanValues = function (obj) {
  return Object.keys(obj).filter((key) => typeof obj[key] === "boolean");
};

// Tercera manera de hacer el ejercicio 🤔
const getKeysOfBooleanValues = (obj) => {
  const propiedades = Object.keys(obj);
  const arrayBooleanas = [];
  for (let i = 0; i < propiedades.length; i++) {
    if (typeof obj[propiedades[i]] === "boolean") {
      arrayBooleanas.push(propiedades[i]);
    }
  }
  return arrayBooleanas;
};

// Cuarta manera de hacer el ejercicio 😱
function getKeysOfBooleanValues(obj) {
  const convert = Object.entries(obj);
  let nuevoArreglo = [];
  for (let i = 0; i < convert.length; i++) {
    const [key, value] = convert[i];
    if (typeof value === "boolean") {
      nuevoArreglo.push(key);
    }
  }
  return nuevoArreglo;
}

// Ejemplo de uso ✅
const objeto = { a: true, b: 42, c: false };
const tipoBooleano = getKeysOfBooleanValues(objeto);
console.log(tipoBooleano);
