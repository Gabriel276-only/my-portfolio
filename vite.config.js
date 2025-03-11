import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    rollupOptions: {
      external: ['aos', 'react-icons/fa', 'framer-motion'], // Add 'framer-motion' here
    },
  },
});