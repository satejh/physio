// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  site: {
    url: 'https://physiotherapy.blogerpedia.com',
    name: 'Physiotherapy in Mumbai',
    description: 'Best Physiotherapy in Mumbai',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@nuxtjs/seo'],
  
})