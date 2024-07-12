import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0', // This will bind the server to all network interfaces
    port: 5173, // You can specify the port if you want, or use the default one
  }
});


