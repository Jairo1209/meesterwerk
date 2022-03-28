<template>
  <div class="supplements-detailpage section-inset-t">
    <layout-return link-to="/supplements" />
    <section class="section-inset-b container">
      <div class="supplements-detailpage__hero section-inset-t">
        <img
          :src="entry.heroImg.fields.file.url"
          alt=""
        >
      </div>
      <div class="supplements-detailpage__title mt-5 mb-3">
        <h1 class="h4 text-uppercase m-0">
          {{ entry.supplementTitle }}
        </h1>
      </div>
      <p>{{ entry.body }}</p>
      <div
        v-for="(item, key) in entry.subContent"
        :key="key"
        class="supplements-detailpage__sub-body mt-5"
      >
        <h3 class="h6">
          {{ item.fields.subTitle }}
        </h3>
        <p>{{ item.fields.subBody }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async fetch ({ store, route }) {
    await store.dispatch('entries/getSlug', {
      content_type: 'supplementPage',
      slug: route.params.slug
    })
  },

  head () {
    return {
      bodyAttrs: {
        class: 'theme-primary-second'
      }
    }
  },

  computed: {
    entry () {
      return this.$store.state.entries.data.supplementPage.slugEntry
    }
  },

  mounted () {
    console.log(this.entry)
  }
}
</script>

<style lang="scss" scoped>
.supplements-detailpage {
  position: relative;
  min-height: 100vh;
  padding-top: rem(50px);
  padding-bottom: rem(80px);

  &__title {
    h1 {
      color: theme-color(primary);
    }
  }

  &__hero {
    img {
      width: 100%;
      height: 250px;
      object-fit: contain;
    }
  }
}

h3,
p {
  color: theme-color(primary);
  text-transform: inherit;
}
</style>
