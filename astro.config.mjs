import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// ⬇️ AU CHANGEMENT DE DOMAINE : remplacer cette URL par le domaine final
// (ex. https://laverieducygne.fr). Tout le SEO (canonical, partage, données
// Google) se met à jour automatiquement. Pensez aussi à public/sitemap.xml
// et public/robots.txt (2 lignes).
export default defineConfig({
  site: 'https://laverieducygne.fr',
  vite: { plugins: [tailwindcss()] },
})
