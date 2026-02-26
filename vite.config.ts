import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { reactRouter } from '@react-router/dev/vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react(), reactRouter()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
});
