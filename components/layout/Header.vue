<template>
  <div class="header">
    <base-svg
      class="header__logo"
      name="icon-mylife-logo-large"
    />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: rem(80px);
  padding: rem(20px);

  body.theme-primary & {
    &__logo {
      color: theme-color(light);
    }
  }

  body.theme-secondary & {
    &__logo {
      color: theme-color(secondary);
    }
  }

  body.theme-light & {
    &__logo {
      color: theme-color(light);
    }
  }
}
</style>
