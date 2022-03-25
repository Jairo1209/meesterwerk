<template>
  <div>
    <div class="mobile-only">
      <h3>switch to mobile device</h3>
    </div>

    <layout-header />

    <nuxt />
    <layout-menu />
    <!-- <cookie-consent /> -->
  </div>
</template>

<style lang="scss">
  .mobile-only {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #000;

    @include media-breakpoint-only(xs) {
      display: none;
    }
  }
</style>
