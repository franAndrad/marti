import { defineConfig } from 'astro/config';

// Configurado para publicar en GitHub Pages en el repo "marti".
// Si el sitio se sirve en https://<usuario>.github.io/marti/, el base debe ser "/marti".
export default defineConfig({
  site: 'https://franandrad.github.io',
  base: '/marti',
});
