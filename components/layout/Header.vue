<template>
  <header class="l-container c-header">
    <p class="c-header__descr">
      Nuxt boilerplate {{ version }}
    </p>
    <h1>{{ data.title }}</h1>
    <markdown
      v-if="data.body"
      class="c-header__content"
      :md="data.body"
    />
  </header>
</template>

<script>
export default {
  props: {
    version: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.c-header {
  display: flex;
  flex-wrap: wrap;

  &__content {
    flex: 0 0 percentage(3 / 6);
    max-width: percentage(3 / 6);
    margin-left: percentage(1 / 6);
  }

  &__descr {
    color: #4b4b4b;
  }
}
</style>
