import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/get-portfolio-data': {
        target: 'http://localhost:2000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/get-portfolio-data/, '/get-portfolio-data')
      }
    }
  }
});
