import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves this site at the root of its custom domain (public/CNAME).
// The build goes to site/, which is what the gh-pages branch holds.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  build: { outDir: 'site' },
});
