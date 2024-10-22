// Ordenar un arreglo de forma aleatoria

const ordenarFormaAleatoria = function (arr) {
  return arr.sort(() => Math.random() - 0.5);
};

const numeros = [1, 2, 3, 4, 5, 6, 7];
console.log(ordenarFormaAleatoria(numeros));
