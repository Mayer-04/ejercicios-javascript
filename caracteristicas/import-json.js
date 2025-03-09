// Importar un archivo JSON con ESMODULES
// Node 22
import movies from './movies.json' with { type:'json' };

// Importar un archivo JSON con CommonJS
import fs from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const configPath = join(
  dirname(fileURLToPath(import.meta.url)),
  './some-config-file.json'
);
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));