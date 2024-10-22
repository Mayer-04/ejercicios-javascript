import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@js": path.resolve(__dirname, "./javascript"), // Alias para la carpeta 'javascript'
    },
  },
});
