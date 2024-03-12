import { defineConfig, loadEnv } from "vite";
import { qrcode } from "vite-plugin-qrcode";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd());
  const PROXY_TARGET = env.VITE_PROXY_TARGET;

  return {
    plugins: [
      react(),
      qrcode(),
      VitePWA({
        registerType: "prompt",
        includeAssests: ["favicon.ico", "apple-touc-icon.png"],
        manifest: {
          name: "React-vite-app",
          short_name: "react-vite-app",
          description: "I am a simple vite app",
          icons: [
            {
              src: "/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "favicon",
            },
            {
              src: "/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "favicon",
            },
            {
              src: "/apple-touch-icon.png",
              sizes: "180x180",
              type: "image/png",
              purpose: "apple touch icon",
            },
          ],
          theme_color: "#171717",
          background_color: "#f0e7db",
          display: "standalone",
          scope: "/",
          start_url: "/",
          orientation: "portrait",
        },
      }),
    ],
    server: {
      host: true,
      port: 8080,
      proxy: {
        "/api": {
          target: PROXY_TARGET,
          changeOrigin: true,
          secure: false,
          ws: true,
        },
      },
    },
  };
});
