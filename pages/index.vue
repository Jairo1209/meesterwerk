<template>
  <div class="section-inset-y container">
    <l-header :data="entry" />

    <h1 @click="onToggleCookie">
      Toggle cookies
    </h1>
  </div>
</template>

<script>
import Head from '~/mixins/head'
import event from '~/plugins/event'

export default {
  mixins: [Head],

  async fetch ({ store }) {
    await store.dispatch('entries/getEntry', {
      name: 'home',
      id: 'JLYHH34lB3DiYRRYXBf65'
    })
  },

  computed: {
    entry () {
      return this.$store.state.entries.data.home.entry
    }
  },

  methods: {
    onToggleCookie () {
      event.$emit('openCookiePref')
    }
  }
}
</script>
