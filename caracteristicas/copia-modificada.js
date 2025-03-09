const nombres = ["Mayer", "Andres", "Luis"];

// Método with() ✅
// Modificamos un elemento del arreglo original y creamos una copia
const copia = nombres.with(1, "Maria");
console.log(nombres); // [ 'Mayer', 'Andres', 'Luis' ]
console.log(copia); // [ 'Mayer', 'Maria', 'Luis' ]
