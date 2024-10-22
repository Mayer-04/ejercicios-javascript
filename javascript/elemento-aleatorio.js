// Recupera aleatoriamente un item de un arreglo

export function recuperarItem(item) {
  const recuperar = Math.floor(Math.random() * item.length);
  const itemRandoms = item[recuperar];
  return itemRandoms;
}

const animales = ["🦁", "🐅", "🐆", "🐺"];

console.log(recuperarItem(animales));
