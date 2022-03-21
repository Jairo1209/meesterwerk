<template>
  <img
    class="img"
    :src="`${imgSrc}?fit=fill&w=2000&h=1500&q=80&fm=jpg&fl=progressive`"
    alt="image"
  >
</template>

<script>
export default {
  name: 'BaseImage',

  props: {
    imgSrc: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style lang="scss">
.img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
