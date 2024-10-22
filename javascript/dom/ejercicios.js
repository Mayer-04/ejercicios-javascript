/*
Ejercicio 1: Cambio de texto

- Crea un archivo HTML con un párrafo de texto.
- Agrega un botón debajo del párrafo.
- Usando JavaScript, cuando el botón sea presionado, cambia el texto del párrafo por otro mensaje.
*/

const texto = document.querySelector("[data-texto]");
const cambiarTexto = document.querySelector("#cambiarTexto");

cambiarTexto.addEventListener("click", () => {
  texto.textContent = "Soy el nuevo contenido del texto del primer ejercicio.";
});

/* 
Ejercicio 2: Lista de tareas

- Crea un archivo HTML con una lista desordenada (ul) vacía.
- Agrega un input de texto y un botón debajo de la lista.
- Cuando el botón sea presionado, toma el valor del input y agrega un nuevo elemento de lista (li) con ese valor a la lista desordenada.
*/

const listaDesordenada = document.querySelector("#lista");
const inputElemento = document.querySelector("#elemento");
const agregarLista = document.querySelector("#agregarLista");

agregarLista.addEventListener("click", () => {
  const valorInput = inputElemento.value;
  const crearLista = document.createElement("li");
  crearLista.textContent = valorInput;
  listaDesordenada.append(crearLista);
  // Ponemos el campo vacio cuando agregamos un elemento a la lista
  inputElemento.value = "";
});

/* 
Ejercicio 3: Cambio de estilo

- Crea un archivo HTML con un elemento div vacío.
- Agrega dos botones debajo del div, uno para cambiar el color de fondo y otro para cambiar el tamaño de fuente.
- Usando JavaScript, al presionar los botones, cambia el color de fondo y el tamaño de fuente del div.
*/

const contenedor = document.getElementById("contenedor");
const cambiarFondo = document.getElementById("cambiarFondo");
const cambiarFuente = document.getElementById("cambiarFuente");

cambiarFondo.addEventListener("click", () => {
  contenedor.style.backgroundColor = "#0284C7";
});

cambiarFuente.addEventListener("click", () => {
  contenedor.style.fontSize = "1.5rem";
});
