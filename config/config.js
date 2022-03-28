/**
 * Config and settings
 *
 * nuxt-boilerplate
 *
 */

const themeColor = '#fff'

const config = {
  // base
  themeColor,
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',

  css: [
    '~assets/scss/main.scss'
  ],

  styleResources: {
    scss: [
      '~assets/scss/functions/*.scss',
      '~assets/scss/mixins/*.scss',
      '~assets/scss/_config.scss',
      '~assets/scss/placeholders/*.scss',
      '~assets/scss/bootstrap/_variables.scss'
    ]
  },

  // Pages / Content types Contentful
  contentTypes: [
    'home',
    'news',
    'globals'
  ],

  // loading
  loading: { color: themeColor }
}

export const { contentTypes } = config
export default config
