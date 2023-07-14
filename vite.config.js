import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Wonder Travel',
        short_name: 'Wonder',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/src/assets/images/Group 1098.svg',
            sizes: '192x192',
            type: 'image/svg',
          },
        ],
      },
    }),
  ],
});
