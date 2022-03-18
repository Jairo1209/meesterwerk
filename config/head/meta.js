/**
 * Generate meta data
 *
 *
 * @author Uncommon
 * @author Rutger Bakker <rutger@getuncommon.digital>
 */

const imgParams = {
  twitter: '?w=300&h=300&fm=png&fit=fill',
  facebook: '?w=1200&h=630&q=80&fm=jpg&fit=fill'
}

export default function metaData (title = process.env.SITENAME, url = '', description = '', img = '') {
  const meta = [
    { hid: 'title', name: 'title', content: title },
    { hid: 'description', name: 'description', content: description },

    // Facebook
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:site_name', property: 'og:site_name', content: process.env.SITENAME },
    { hid: 'og:url', property: 'og:url', content: url },
    { hid: 'og:title', property: 'og:title', content: title },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'og:image', property: 'og:image', content: img ? `${img}${imgParams.facebook}` : '' },

    // Twitter
    { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:url', property: 'twitter:url', content: url },
    { hid: 'twitter:title', property: 'twitter:title', content: title },
    { hid: 'twitter:description', property: 'twitter:description', content: description },
    { hid: 'twitter:image', property: 'twitter:image', content: img ? `${img}${imgParams.twitter}` : '' }
  ]

  return {
    title,
    link: [
      { rel: 'canonical', href: url }
    ],
    meta
  }
}
