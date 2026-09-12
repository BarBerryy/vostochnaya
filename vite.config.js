import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' — собранный dist/index.html открывается и с сервера, и просто двойным кликом
export default defineConfig({
  plugins: [react()],
  base: './',
  server: { host: '127.0.0.1', port: 5173, hmr: { host: '127.0.0.1' } },
});
