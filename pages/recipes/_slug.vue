<template>
  <div class="recipe-detailpage">
    <layout-return link-to="/recipes" />
    <div class="recipe-detailpage__hero-img">
      <div class="recipe-detailpage__overlay" />
      <img
        :src="`${entry.heroImage.fields.file.url}?fit=fill&w=2000&h=1500&q=80&fm=jpg&fl=progressive`"
        :alt="entry.recipeTitle"
      >
    </div>
    <div class="container">
      <div class="recipe-detailpage__details">
        <span
          v-for="(item, key) in entry.recipeDetails"
          :key="key"
          class="h6"
        >
          {{ item }}
        </span>
      </div>
      <div class="recipe-detailpage__title mt-2 mb-2">
        <h1 class="h4 text-uppercase m-0">
          {{ entry.recipeTitle }}
        </h1>
      </div>
      <strong>INGREDÏENTEN</strong>
      <div class="recipe-detailpage__ingredients-list">
        <ul class="p-0 mt-3 ">
          <li
            v-for="(item, key) in entry.ingredients"
            :key="key"
            class="ingredient-wrapper list-unstyled d-flex flex-column mt-3 mb-3"
          >
            <h6 class="title m-0">
              {{ item.fields.title }}
            </h6>
            <span class="body">{{ item.fields.body }}</span>
          </li>
        </ul>
      </div>
      <strong>INSTRUCTIES</strong>
      <div class="recipe-detailpage__cookingsteps-list">
        <ul class="p-0 mt-3 ">
          <li
            v-for="(item, key) in entry.cookingSteps"
            :key="key"
            class="list-unstyled d-flex flex-column mt-3 mb-3"
          >
            <h6 class="title m-0">
              {{ item.fields.title }}
            </h6>
            <span class="body">{{ item.fields.body }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch ({ store, route }) {
    await store.dispatch('entries/getSlug', {
      content_type: 'recipeDetailPage',
      slug: route.params.slug
    })
  },
  head () {
    return {
      bodyAttrs: {
        class: 'theme-secondary'
      }
    }
  },

  computed: {
    entry () {
      return this.$store.state.entries.data.recipeDetailPage.slugEntry
    }
  },

  mounted () {
    console.log(this.entry)
  }

}
</script>

<style lang="scss">
.recipe-detailpage {
  position: relative;
  padding-bottom: rem(80px);
  color: black;

  strong {
    font-size: 17px;
    color: theme-color(primary);
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 25%;
  }

  &__hero-img {
    position: relative;
    width: 100%;
    height: rem(280px);

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .title {
    font-size: 16px;
    font-weight: bold;
    color: theme-color(primary);
    text-transform: inherit;
  }

  .body {
    font-size: 16px;
  }

  &__title {
    h1 {
      color: theme-color(secondary);
    }
  }

  &__details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;

    span {
      font-size: 16px;
      color: theme-color(secondary);
    }
  }
}

.ingredient-wrapper {
  border-bottom: solid 1px theme-color(secondary);
}
</style>
