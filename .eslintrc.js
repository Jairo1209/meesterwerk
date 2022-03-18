module.exports = {
  env: {
    browser: true,
    node: true
  },
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: ['@nuxtjs'],
  rules: {
    'vue/no-v-html': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }]
  }
}
