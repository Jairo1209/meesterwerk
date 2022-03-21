<template>
  <div class="menu">
    <ul class="list-unstyled d-inline-flex align-items-center justify-content-around">
      <li>
        <n-link
          class="menu__link"
          to="/"
        >
          <base-svg name="icon-mylife-logo" />
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
  width: 100%;
  background-color: theme-color(primary);

  ul {
    width: 100%;
    height: 80px;
  }

  &__link {
    text-decoration: none;
  }

  body.theme-primary & {
    background-color: theme-color(primary);
  }

  body.theme-secondary & {
    background-color: theme-color(secondary);
  }

  body.theme-light & {
    &__link {
      color: theme-color(primary);
    }

    background-color: theme-color(light);
  }
}
</style>
