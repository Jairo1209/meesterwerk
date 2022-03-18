import createHead from '~/config/head/create-head'

export default {
  data () {
    return {
      headOptions: {
        bodyAttrs: {
          class: 'just-an-example'
        }
      }
    }
  },

  head () {
    return createHead(this, this.headOptions)
  }
}
