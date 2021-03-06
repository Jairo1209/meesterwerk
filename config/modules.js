/**
 * Nuxt modules and build modules
 *
 * nuxt-boilerplate
 *
 */

export default {
  modules: [
    '@nuxtjs/gtm',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    ['@nuxtjs/markdownit', { injected: true }],
    '@nuxtjs/style-resources',
    ['nuxt-rfg-icon', { static: true }],
    ['cookie-universal-nuxt', { alias: 'uCookie' }]
  ],

  buildModules: [
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg'
  ]
}
