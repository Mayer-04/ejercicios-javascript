# Conceptos

## Funciones Puras e Impuras

Dos caracteristicas fundamentales:

1. Dada una entrada siempre vamos a obtener una misma salida. Siempre produce el mismo resultado.

Producen efectos secundarios:

- Modificar variables globales.
- Modificar parámetros.
- Solicitudes HTTP.
- Imprimir mensajes en pantalla o en consola.
- Acceder o consultar el DOM.
- Acceder a la hora o día.

```js
function sum(a, b) {
  return a + b;
}
```

2. No producen efectos secundarios, no modifica ninguna variable externa, ni depende de variables externas que puedan cambiar.

## Closure

Es una función que tiene acceso a variables de un ámbito externo, incluso después de que esa función haya terminado de ejecutarse.

## Ámbito lexico

Cada vez que se declara una función, crea su propio ámbito léxico, y puede acceder a las variables dentro de ese ámbito y a la variables en ámbitos superiores.

# DOM

### DOM Document Object Model:

Es una representación en forma de árbol del contenido de un documento HTML. Nos permite acceder y manipular los elementos y estructura de la página web desde JavaScript, facilitando cambios dinámicos e interacciones

### Window Object:

Es el objeto global en el navegador que representa la ventana del navegador. Además del DOM tiene acceso a otros recursos como el historial y la localización. Permite también interactuar con hardware a través de API específicas.

- Citas
  > Mayer Andres Chaves Prada
- Listas desordenadas
  Se hace con \* o -

Separación

---
***


LINKS O ENLACES

[google](http://www.limni.net)