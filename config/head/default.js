/**
 * <head></head> options
 *
 *
 */

let robots = []

if (process.env.ENVIRONMENT === 'develop') {
  robots = [
    { hid: 'robots', name: 'robots', content: 'noindex, noarchive, nofollow' },
    { hid: 'googlebot', name: 'googlebot', content: 'noindex, noarchive, nofollow' }
  ]
}

const meta = [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { name: 'theme-color', content: '#000000' }
]

const children = meta.concat(robots)

export default {
  meta: children,
  link: [
    { href: '/fonts/fonts.css', media: 'all', rel: 'stylesheet' }
  ]
}
