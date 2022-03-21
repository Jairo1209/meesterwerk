<template>
  <div class="card">
    <div class="card__image">
      <img
        :src="src"
        alt="img"
      >
    </div>
    <div class="card__content">
      <h6 class="card__text m-0">
        henk
      </h6>
      <span>15 min</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',

  props: {
    src: {
      type: String,
      default: undefined
    }
  }

}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  margin: 10px;
  overflow: hidden;
  border-radius: 13px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .1), 0 3px 3px 0 rgba(0, 0, 0, .1);

  &__content {
    padding: rem(10px);
    color: #000;
    background-color: theme-color(light);
  }

  &__text {
    color: theme-color(secondary);
  }

  &__image {
    width: 100%;
    height: rem(120px);
    overflow: hidden;
  }
}
</style>
