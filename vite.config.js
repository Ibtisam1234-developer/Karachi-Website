import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        history: resolve(__dirname, 'history.html'),
        culture: resolve(__dirname, 'culture.html'),
        traditions: resolve(__dirname, 'traditions.html'),
        places: resolve(__dirname, 'places.html'),
      },
    },
  },
});
