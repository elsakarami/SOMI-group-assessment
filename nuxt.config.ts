// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  components: true,
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: {
        lang: 'de'
      }
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/scss/_general.scss',
    '~/assets/scss/_typography.scss',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
  
})