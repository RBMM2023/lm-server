import { defineConfig } from 'vite';

export default defineConfig({
  base: '/lm-server-client.git/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        contactUs: './contactUs.html',
        prices: './prices.html',
        gallery: './gallery.html',
        rules: './rules.html',
        privacyPolicy: './privacyPolicy.html',
        cookiePolicy: './cookiePolicy.html',
        modal: 'popupModal.html',
      },
    },
  },
  optimizeDeps: {
    include: [
      '@fullcalendar/core',
      '@fullcalendar/daygrid',
      '@fullcalendar/interaction',
    ],
  },
});
