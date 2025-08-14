import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: '.',
  base: './',
  publicDir: 'public',
  appType: 'mpa',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        'home': path.resolve(__dirname, 'src/pages/home/index.html'),
        'meet': path.resolve(__dirname, 'src/pages/meet/index.html'),
        'issues': path.resolve(__dirname, 'src/pages/issues/index.html'),
        'connect': path.resolve(__dirname, 'src/pages/connect/index.html'),
        'endorsements': path.resolve(__dirname, 'src/pages/endorsements/index.html'),
        'mediakit': path.resolve(__dirname, 'src/pages/mediakit/index.html'),
        'donate': path.resolve(__dirname, 'src/pages/donate/index.html'),
        'vote': path.resolve(__dirname, 'src/pages/vote/index.html')
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  server: {
    port: 5173,
    open: '/src/pages/home/index.html'
  }
});


