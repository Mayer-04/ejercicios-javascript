# Corepack y Pnpm

## ¿Qué es Corepack?

Es una herramienta que viene incluida con `Node.js` a partir de la versión **16.9.0** y está diseñada para manejar administradores de paquetes como `yarn` o `pnpm`.

Su propósito principal es permitir a los desarrolladores utilizar diferentes gestores de paquetes sin necesidad de instalarlos globalmente de forma manual.

## ¿Qué es Pnpm?

Pnpm es un administrador de paquetes para JavaScript, una **alternativa** a npm y yarn, conocido por su eficiencia en el uso de disco y rapidez en la instalación de dependencias.

### ¿Cómo instalar Pnpm con Corepack?

Gracias a `Corepack`, puedes habilitar y gestionar pnpm fácilmente. Aquí te mostramos los pasos para instalar la versión más reciente de pnpm en tu sistema.

1. **Habilitar el uso de pnpm a través de Corepack:**
   Si aún no tienes pnpm habilitado, ejecuta el siguiente comando:

```bash
corepack enable pnpm
```

2. **Instalar la última versión de pnpm y activarla globalmente:**
   Para asegurarte de que estás utilizando la versión más reciente de pnpm, puedes instalarla y activarla globalmente en tu entorno:

```bash
corepack prepare pnpm@latest --activate
```

Este comando descarga e instala la última versión de pnpm, asegurando que esté lista para usarse en tu sistema.

### Otro comando

```bash
corepack install -g pnpm@latest
```
