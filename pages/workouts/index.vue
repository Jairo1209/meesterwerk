<template>
  <div class="workouts">
    index
  </div>
</template>

<script>
export default {
  head () {
    return {
      bodyAttrs: {
        class: 'theme-light'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.workouts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  body.theme-light & {
    background-color: theme-color(primary);
  }
}
</style>
