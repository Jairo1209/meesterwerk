<template>
  <div class="homepage">
    <div
      v-for="item, key in entry.menuCategory"
      :key="key"
      class="homepage__category"
    >
      <n-link
        v-if="item.fields.linkTo"
        class="homepage__category-link"
        :to="item.fields.linkTo"
      />
      <div
        class="homepage__content container"
      >
        <h5 class="homepage__title">
          {{ item.fields.title }}
        </h5>
        <p class="homepage__body">
          {{ item.fields.body }}
        </p>
      </div>
      <img
        class="homepage__img"
        :src="`${item.fields.backgroundImage.fields.file.url}?fit=fill&w=2000&h=1500&q=80&fm=jpg&fl=progressive`"
        alt="img"
      >
      <div class="homepage__overlay" />
    </div>
  </div>
</template>

<script>

export default {

  async fetch ({ store }) {
    await store.dispatch('entries/getEntry', {
      name: 'homepagePagina',
      id: 'v8FdT66OqTsgalAmWARg9'
    })
  },

  head () {
    return {
      bodyAttrs: {
        class: 'theme-primary'
      }
    }
  },

  computed: {
    entry () {
      return this.$store.state.entries.data.homepagePagina.entry
    }
  },

  mounted () {
    console.log(this.entry)
  }
}
</script>

<style lang="scss">
.homepage {
  &__category {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  &__content {
    z-index: 10;
    text-align: center;
  }

  &__title {
    @include get-font-size(h3);
  }

  &__btn {
    min-width: rem(120px);
    padding: rem(5px) rem(10px);
    font-size: rem(14px);
    color: #000;
    text-decoration: none;
    text-transform: uppercase;
    background-color: theme-color(light);
    border-radius: rem(100px);
  }

  &__category-link {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 40%;
  }
}
</style>
