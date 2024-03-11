import { defineConfig } from "vite";
import { qrcode } from "vite-plugin-qrcode";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), qrcode()],
  server: {
    host: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000/',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    },
  }
});
