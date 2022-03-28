<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AnimationsZoomEffect',
  mounted () {
    this.zoom()
  },
  beforeDestroy () {
    this.zoom()
  },
  methods: {
    zoom () {
      this.tl = this.$gsap.timeline({
        scrollTrigger: {
          trigger: this.$el,
          start: 'top top', // Start at top of Trigger and at the top of the viewport
          end: '+=100% 0px',
          scrub: 1
        },
        defaults: {
          markers: true,
          force3D: true,
          ease: 'power4.out'
        }
      })
      this.tl.to(this.$el, { scale: 1.1 })
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
