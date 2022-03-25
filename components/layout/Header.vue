<template>
  <div class="header">
    <h6 class="header__logo m-0 text-uppercase">
      MYLIFE
    </h6>
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

  &__logo {
    font-size: rem(24px);
  }

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
