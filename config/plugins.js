/**
 * Nuxt plugins
 *
 * nuxt-boilerplate
 *
 */

export default [
  { src: '~/plugins/global-components.js' },
  { src: '~/plugins/directives.js', mode: 'client' },
  { src: '~/plugins/gsap.js', mode: 'client' },
  { src: '~/plugins/swiper.js', mode: 'client' },
  { src: '~/plugins/gtm.js' }
]
