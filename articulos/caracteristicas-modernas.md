# Características modernos en Node.js

## 🆕 `node --run dev` (Estable desde Node 22)

- Este comando permite ejecutar scripts definidos en tu _package.json_ directamente desde node, sin necesidad de usar _npm run_.

Por ejemplo, si tienes en package.json:

```json
"scripts": {
  "dev": "node index.js",
  "lint": "eslint ."
}
```

Puedes hacer:

```bash
node --run dev
node --run lint
```

## 📦 Soporte de ESM (ECMAScript Modules) nativo (Node.js 23)

Desde Node 23, ya no necesitas hacks para usar import/export, ni usar "type": "module" en package.json.

```js
// Ahora puedes hacer:
import fs from "node:fs";
export const hello = () => console.log("Hola");
```

Es decir, ESM ya es el estándar preferido sobre require() / module.exports.

## 🔄 fnm, nvm, volta

Son gestores de versiones de Node.js, útiles para proyectos con distintos entornos:

- nvm (Node Version Manager) – el más tradicional, en bash/zsh.
- fnm (Fast Node Manager) – más rápido, escrito en Rust.
- volta – automatiza más cosas (ej: fijar versiones de npm, yarn, etc.), buena opción para equipos grandes.

👉 Todos permiten cambiar de versión de Node con un simple comando.

## 🌿 process.loadEnvFile() (Estable en Node 22)

Desde Node 22 puedes cargar variables desde un .env directamente con Node.js, sin necesitar paquetes externos como dotenv.

```js
process.loadEnvFile(".env");
console.log(process.env.MY_SECRET);
```

Esto hace más seguro y eficiente el uso de variables de entorno en apps Node.

## `node --watch` (Estable desde Node 22)

Este flag permite que Node reinicie automáticamente cuando detecta cambios en los archivos.

```bash
node --watch index.js
```

Ideal para desarrollo, porque te evita reiniciar el servidor manualmente.

Desde Node 20.13.0, este flag ya es completamente estable, aunque en Node 22 se mejoró aún más.

## 🗂️ glob en fs (Estable en Node 22)

El módulo fs ahora soporta glob patterns (como `**/*.js`) para trabajar con múltiples archivos, sin librerías externas como glob.

```js
import { readdir } from "node:fs/promises";

const files = await readdir("./src", { withFileTypes: true, recursive: true });
```

Incluso puedes hacer:

```js
fs.glob("src/**/*.js"); // Experimental o con extensión
```

## npx is-my-node-vulnerable

Este comando revisa si tu versión de Node tiene vulnerabilidades conocidas:

```bash
npx is-my-node-vulnerable
```

✅ Muy útil antes de desplegar, o en pipelines de CI/CD.
