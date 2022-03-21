/**
 * Nuxt plugins
 *
 * nuxt-boilerplate
 *
 * @author Uncommon
 * @author Rutger Bakker <rutger@getuncommon.digital>
 */

export default [
  { src: '~/plugins/global-components.js' },
  { src: '~/plugins/credits.js', mode: 'client' },
  { src: '~/plugins/directives.js', mode: 'client' },
  { src: '~/plugins/gsap.js', mode: 'client' },
  { src: '~/plugins/swiper.js', mode: 'client' },
  { src: '~/plugins/gtm.js' }
]
