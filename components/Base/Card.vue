<template>
  <div
    class="card"
    :class="{ 'card__recipe-layout' : recipeCard, 'card__workout-layout' : workoutCard}"
  >
    <n-link
      class="card__link"
      :to="linkTo"
    />
    <div class="card__image">
      <img
        :src="`${src}?fit=fill&w=2000&h=1500&q=80&fm=jpg&fl=progressive`"
        alt="img"
      >
    </div>
    <div class="card__content">
      <h6 class="card__text m-0">
        {{ title }}
      </h6>
      <span>{{ details }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',

  props: {
    src: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    },
    details: {
      type: String,
      default: undefined
    },
    linkTo: {
      type: String,
      default: undefined
    },
    recipeCard: {
      type: Boolean,
      default: false
    },
    workoutCard: {
      type: Boolean,
      default: false
    }
  }

}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  margin: 10px;
  overflow: hidden;
  border-radius: 13px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .1), 0 3px 3px 0 rgba(0, 0, 0, .1);

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
  }

  &__recipe-layout {
    .card__content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      min-height: 90px;
      padding: rem(10px);
      color: #000;
      background-color: theme-color(light);
    }

    .card__text {
      font-size: 16px;
      color: theme-color(secondary);
    }
  }

  &__workout-layout {
    .card__content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: rem(10px);
      color: #000;
      background-color: theme-color(light);
    }

    .card__text {
      font-size: 16px;
      color: theme-color(primary);
      text-transform: inherit;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    min-height: rem(120px);
    overflow: hidden;
  }
}
</style>
