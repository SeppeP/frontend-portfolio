// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    port: 8000
  },
  css: ['~/assets/css/styles.scss', '@fortawesome/fontawesome-svg-core/styles.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/css/variables.scss" as *;`,
        },
      },
    },
  },
})
