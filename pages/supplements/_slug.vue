<template>
  <div class="">
    slug
  </div>
</template>

<script>
export default {
  async fetch ({ store, route }) {
    await store.dispatch('entries/getSlug', {
      content_type: 'recipeDetailPage',
      id: route.params.slug
    })
  },

  computed: {
    entry () {
      return this.$store.state.entries.data.recipeDetailPage.slugEntry
    }
  },

  mounted () {
    console.log(this.entry)
  }

}
</script>

<style lang="scss" scoped>
//
</style>
