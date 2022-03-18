/**
 * Generate meta data
 *
 * nuxt-boilerplate
 *
 * @author Uncommon
 * @author Rutger Bakker <rutger@getuncommon.digital>
 */

export default function metaData (title = 'nuxt-boilerplate', url = '', description = '', img = '') {
  return {
    title,
    link: [
      { rel: 'canonical', href: url }
    ],
    meta: [
      { hid: 'title', name: 'title', content: title },
      { hid: 'description', name: 'description', content: description },

      // Facebook
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: url },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:image', property: 'og:image', content: img },

      // Twitter
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:url', property: 'twitter:url', content: url },
      { hid: 'twitter:title', property: 'twitter:title', content: title },
      { hid: 'twitter:description', property: 'twitter:description', content: description },
      { hid: 'twitter:image', property: 'twitter:image', content: img }
    ]
  }
}
