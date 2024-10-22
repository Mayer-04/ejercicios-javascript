/* 
Crea una función multiplyNumeric(obj) que multiplique todas las propiedades numéricas de obj por 2.
Nota: multiplyNumeric no necesita devolver nada. Debe modificar el objeto en su lugar.
*/

function multiplyNumeric(obj) {
  for (const numero in obj) {
    if (!isNaN(obj[numero])) {
      obj[numero] *= 2;
    }
  }
}

const multiplyNumeric = (obj) => {
  for (const number in obj) {
    if (typeof obj[number] === "number") {
      obj[number] *= 2;
    }
  }
};
