import { defineConfig } from 'vite';

export default defineConfig({
  base: '/lm-server-client/', // Ensure this matches your GitHub repository name
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
        modal: './popupModal.html',
      },
      output: {
        manualChunks: {
          // Ensure FullCalendar dependencies are bundled correctly
          fullcalendar: [
            '@fullcalendar/core',
            '@fullcalendar/daygrid',
            '@fullcalendar/interaction',
          ],
        },
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
