/**
 * Nuxt modules and build modules
 *
 * nuxt-boilerplate
 *
 * @author Uncommon
 * @author Rutger Bakker <rutger@getuncommon.digital>
 */

export default {
  modules: [
    '@nuxtjs/gtm',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    ['@nuxtjs/markdownit', { injected: true }],
    '@nuxtjs/style-resources',
    ['nuxt-rfg-icon', { static: true }],
    ['cookie-universal-nuxt', { alias: 'uCookie' }]
  ],

  buildModules: ['@nuxtjs/stylelint-module']
}
