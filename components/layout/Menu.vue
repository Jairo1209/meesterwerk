<template>
  <div class="menu">
    <ul class="list-unstyled d-inline-flex align-items-center justify-content-between">
      <li>
        <n-link
          class="menu__link"
          to="/"
        >
          <h6 class="menu__logo m-0 text-uppercase">
            MYLIFE
          </h6>
        </n-link>
      </li>
      <li>
        <n-link
          class="menu__link"
          to="/workouts"
        >
          <base-svg name="icon-dumbbell" />
        </n-link>
      </li>
      <li>
        <n-link
          class="menu__link"
          to="/recipes"
        >
          <base-svg name="icon-apple" />
        </n-link>
      </li>
      <li>
        <n-link
          class="menu__link"
          to="/supplements"
        >
          <base-svg name="icon-pills" />
        </n-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: theme-color(primary);

  &__logo {
    font-size: rem(17px);
  }

  ul {
    width: 90%;
    max-width: 300px;
    height: 80px;
  }

  &__link {
    text-decoration: none;
  }

  body.theme-primary & {
    background-color: theme-color(primary);

    .menu__logo {
      color: theme-color(light);
    }
  }

  body.theme-secondary & {
    background-color: theme-color(secondary);

    .menu__logo {
      color: theme-color(light);
    }
  }

  body.theme-light & {
    &__link {
      color: theme-color(primary);
    }

    .menu__logo {
      color: theme-color(primary);
    }

    background-color: theme-color(light);
  }
}
</style>
