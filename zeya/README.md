# ZEYA Armonización Orofacial · Landing

Sitio estático de una sola página hecho con Astro y Tailwind CSS.

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/
```

## Dónde se edita el contenido

Todo el texto y los datos están en **`src/data/site.ts`**. Para ver qué falta:

```bash
grep -rn "PENDIENTE" src public astro.config.mjs
```

Mientras un enlace siga en `[PENDIENTE]`, el sitio lo muestra como texto y no
como un enlace roto. Los botones de cada tratamiento usan el enlace general de
WhatsApp hasta que se capture `site.whatsapp.number`; después abren WhatsApp con
el mensaje del tratamiento ya escrito.

## Otros archivos para reemplazar

- `public/brand/`: logo (ver `public/brand/README.md`).
- `src/assets/galeria/galeria-1…6.webp`: fotos de la galería. Astro las convierte
  a WebP en varios tamaños. `node scripts/placeholders.mjs` vuelve a generar las
  imágenes provisionales.
- `public/og-image.jpg`: imagen para compartir en redes (1200×630).
- `public/favicon.svg`: favicon provisional.
- `src/styles/global.css` (`@theme`): colores de marca, para ajustarlos al logo.
