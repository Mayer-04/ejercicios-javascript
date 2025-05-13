/*
* Symbol
Es un tipo de dato primitivo.
- Un symbol es un identificador único e inmutable ( No puede ser duplicado).
- Un symbol es un "valor primitivo único" con una descripción opcional.
- Lo podemos usar como propiedades de un objeto.
- Los Symbols son omitidos en for…in, Object.keys(user) también los ignora.
*/

const simbolo = Symbol();
console.log(simbolo); // Symbol()

// Creando una descripción o nombre para el symbol
// La descripción es como una etiqueta.
const id = Symbol("id");
console.log({ id }); // { id: Symbol(id) }

// Aunque declaremos dos symbols con la misma descripción, son diferentes.
const id2 = Symbol("id");
console.log(id === id2); // false

// Para obtener la descripción de un symbol.
console.log(id.description); // id
