/*
* Tipos en JavaScript
- Utilizamos el operador `typeof` para obtener el tipo de dato de un valor.
- Hay 9 tipos de datos en JavaScript: number, string, boolean, object, symbol, bigint, null y undefined.
- Con la propiedad `constructor.name` podemos obtener el nombre del tipo de constructor que se utiliza.
*/

console.log(typeof 1); // number
console.log(typeof "hola"); // string
console.log(typeof true); // boolean
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof Symbol()); // symbol
console.log(typeof function () {}); // function

console.log([].constructor.name); // Array
console.log({}.constructor.name); // Object
console.log(function () {}.constructor.name); // Function
