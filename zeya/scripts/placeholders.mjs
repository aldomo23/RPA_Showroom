// Genera las imágenes provisionales ([PENDIENTE]) de la galería y de Open Graph.
// Uso: node scripts/placeholders.mjs  — reemplázalas por fotos reales cuando existan.
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const tones = [
  ["#F0D9C8", "#ECD3CF"],
  ["#ECD3CF", "#FAF5F0"],
  ["#FAF5F0", "#F0D9C8"],
  ["#F0D9C8", "#D9A5A7"],
  ["#ECD3CF", "#F0D9C8"],
  ["#FAF5F0", "#ECD3CF"],
];

const card = (w, h, [a, b], label, sub) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <circle cx="${w / 2}" cy="${h / 2}" r="${Math.min(w, h) * 0.32}" fill="none" stroke="#5E1520" stroke-opacity="0.18" stroke-width="2"/>
  <text x="50%" y="${h / 2 - 6}" text-anchor="middle" font-family="Georgia, serif" font-size="${Math.round(Math.min(w, h) * 0.075)}" fill="#5E1520">${label}</text>
  <text x="50%" y="${h / 2 + Math.min(w, h) * 0.07}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="${Math.round(Math.min(w, h) * 0.035)}" letter-spacing="3" fill="#6B4A4E">${sub}</text>
</svg>`;

mkdirSync("src/assets/galeria", { recursive: true });
for (let i = 0; i < 6; i++) {
  await sharp(Buffer.from(card(1080, 1080, tones[i], `Foto ${i + 1}`, "[PENDIENTE]")))
    .webp({ quality: 80 })
    .toFile(`src/assets/galeria/galeria-${i + 1}.webp`);
}
await sharp(Buffer.from(card(1200, 630, ["#5E1520", "#3E0D15"], "ZEYA", "[PENDIENTE] IMAGEN OPEN GRAPH").replace(/fill="#5E1520">ZEYA/, 'fill="#F0D9C8">ZEYA').replace('fill="#6B4A4E"', 'fill="#D9A5A7"')))
  .jpeg({ quality: 82 })
  .toFile("public/og-image.jpg");
console.log("Imágenes provisionales generadas.");
