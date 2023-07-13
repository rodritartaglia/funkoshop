import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'multimedia',
    base: '/funkoshop/', // Ajusta la ruta base según tus necesidades
  },
});
