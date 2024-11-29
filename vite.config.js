import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensure this matches your GitHub repository name
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
          calendar: ['./calendar.js'],
          auth: ['./auth.js'],
          /* Ensure FullCalendar dependencies are bundled correctly
          fullCalendar: [
            '@fullcalendar/core',
            '@fullcalendar/daygrid',
            '@fullcalendar/interaction',
          ],*/
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
