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
  generate: { fallback: true, subFolders: false },
  // router: { middleware: 'default' },
  styleResources: config.styleResources,
  axios: { baseURL: config.baseUrl },
  i18n: config.i18n,
  gtm: { enabled: true },
  components: true
}
