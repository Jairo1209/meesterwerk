/**
 * Nuxt config
 *
 * nuxt-boilerplate
 *
 */

import config from './config/config.js'
import build from './config/build.js'
import env from './config/environment.js'
import head from './config/head/default.js'
import modules from './config/modules.js'
import plugins from './config/plugins.js'

export default {
  target: process.env.SSR === 'false' ? 'server' : 'static',
  ssr: process.env.SSR !== 'false',
  env,
  head,
  loading: config.loading,
  css: config.css,
  plugins,
  ...modules,
  build,
  pwa: {
    meta: {
      title: 'MYLIFE',
      author: 'Jairo Niks'
    },
    manifest: {
      name: 'MYLIFE',
      short_name: 'MYLIFE',
      description: 'Neem het heft in eigen handen met MYLIFE',
      lang: 'en'
    },
    icon: {
      fileName: 'mylife-logo.png',
      sizes: [64, 120, 144, 152, 192, 384, 512]
    }
  },
  generate: { fallback: true, subFolders: false },
  // router: { middleware: 'default' },
  styleResources: config.styleResources,
  axios: { baseURL: config.baseUrl },
  i18n: config.i18n,
  gtm: { enabled: true },
  components: true
}
