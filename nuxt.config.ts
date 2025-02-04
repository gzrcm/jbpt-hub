// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@fullpage/nuxt-fullpage',
  ],

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {},

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: 'double',
        commaDangle: 'never',
      },
    },
  },
})
