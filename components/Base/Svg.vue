<template>
  <div
    class="svg"
    v-bind="styles"
    v-html="require(`~/assets/img/svg/${name}.svg?raw`)"
  />
</template>

<script>
export default {
  name: 'BaseSvg',
  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 0
    }
  },
  computed: {
    styles () {
      return {
        style: {
          width: this.width > 0 ? `${(this.width / 16)}rem` : undefined
        }
      }
    }
  }
}
</script>

<style lang="scss">
.svg {
  display: inline-block;
  color: inherit;
  vertical-align: middle;

  svg {
    width: 100%;
    fill: currentColor;
    stroke: none;
  }
}

</style>
