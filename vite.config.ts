import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves this project site under /homebox-landing/.
// The build goes to site/, which is what the gh-pages branch holds.
export default defineConfig({
  base: '/homebox-landing/',
  plugins: [react(), tailwindcss()],
  build: { outDir: 'site' },
});
