import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// The site is served at the root of its domain.
// The build goes to site/, which is what gets deployed.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  build: { outDir: 'site' },
});
