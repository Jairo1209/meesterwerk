<template>
  <div class="return">
    <n-link
      :to="linkTo"
      class="text-decoration-none"
    >
      <div class="return__button">
        <span />
        <span />
      </div>
    </n-link>
  </div>
</template>

<script>
export default {
  props: {
    linkTo: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="scss" scoped>
.return {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  height: rem(80px);
  padding: rem(20px);

  &__button {
    position: relative;
    width: 30px;
    height: 30px;

    span {
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
      width: 100%;
      height: 2px;
      background-color: #fff;
      border-radius: 50px;
      transform: translate(-50%, -50%);

      &:nth-child(1) {
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        transform: rotate(-45deg);
      }
    }
  }

  body.theme-primary-second & {
    .return__button {
      span {
        background-color: theme-color(primary);
      }
    }
  }
}
</style>
