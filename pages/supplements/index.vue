<template>
  <div class="supplements section-inset-t">
    <section class="section-inset-b container">
      <div
        v-for="(item, key) in entry.supplementsList"
        :key="key"
        class="supplements__list section-inset-t"
      >
        <div class="mt-5">
          <div class="supplements__img">
            <img
              :src="item.fields.heroImg.fields.file.url"
              alt=""
            >
          </div>
          <div class="supplements__content mt-5">
            <h2>
              {{ item.fields.title }}
            </h2>
            <p>{{ item.fields.body }}</p>
            <n-link
              v-if="item.fields.slug"
              class="supplements__btn"
              :to="`/supplements/${item.fields.slug}`"
            >
              Lees meer
            </n-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

  async fetch ({ store }) {
    await store.dispatch('entries/getEntry', {
      name: 'supplementOverviewPage',
      id: '1FxVgYuktdmNHDyGTcylAT'
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
      return this.$store.state.entries.data.supplementOverviewPage.entry
    }
  }
}
</script>

<style lang="scss" scoped>
.supplements {
  position: relative;
  min-height: 100vh;
  padding-top: rem(50px);
  padding-bottom: rem(80px);

  &__content {
    h2 {
      font-size: 24px;
      color: theme-color(primary);
      text-transform: inherit;
    }

    p {
      display: -webkit-box;
      overflow: hidden;
      font-size: 16px;
      color: theme-color(primary);
      text-overflow: ellipsis;
      -webkit-line-clamp: 4; /* number of lines to show */
      line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }

  &__img {
    img {
      width: 100%;
      height: 200px;
      object-fit: contain;
    }
  }

  &__btn {
    padding: rem(2px) rem(25px);
    font-size: 16px;
    text-decoration: none;
    background-color: theme-color(primary);
    border-radius: 50px;
  }
}
</style>
