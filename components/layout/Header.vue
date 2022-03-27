<template>
  <div class="header">
    <n-link
      to="/"
      class="text-decoration-none"
    >
      <h6 class="header__logo m-0 text-uppercase">
        MYLIFE
      </h6>
    </n-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
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
