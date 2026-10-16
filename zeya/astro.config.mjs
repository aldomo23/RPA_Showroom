// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { site } from "./src/data/site.ts";

export default defineConfig({
  // El dominio se edita en src/data/site.ts (site.url).
  site: site.url,
  // CSS en línea: evita una petición que bloquea el render.
  build: { inlineStylesheets: "always" },
  vite: {
    plugins: [tailwindcss()],
  },
});
