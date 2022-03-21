<template>
  <div class="slider">
    <!-- Slider main container -->
    <div
      ref="slider"
      class="swiper"
    >
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <slot />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  mounted () {
    const { Swiper } = this.$swiper
    this.swiper = new Swiper(this.$refs.slider, {

      breakpoints: {
        200: {
          slidesPerView: 1.5,
          spaceBetween: 15
        },
        320: {
          slidesPerView: 1.7,
          spaceBetween: 20
        },
        375: {
          slidesPerView: 1.8,
          spaceBetween: 30
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  z-index: 99;
  width: 100%;
  overflow-y: hidden;
}
</style>
