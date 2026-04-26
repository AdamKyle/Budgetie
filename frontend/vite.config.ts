import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: ['budgetie.test'],
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      api: path.resolve(dirname, 'src/api'),
      assets: path.resolve(dirname, 'src/assets'),
      components: path.resolve(dirname, 'src/components'),
      constants: path.resolve(dirname, 'src/constants'),
      contexts: path.resolve(dirname, 'src/contexts'),
      hooks: path.resolve(dirname, 'src/hooks'),
      pages: path.resolve(dirname, 'src/pages'),
      types: path.resolve(dirname, 'src/types'),
      utils: path.resolve(dirname, 'src/utils'),
    },
  },
});