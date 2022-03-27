<template>
  <div class="recipes section-inset-t">
    <section
      class="slider-wrapper favorites section-inset-b ml-5"
    >
      <h6
        class="slider-wrapper__title"
      >
        Favorites
      </h6>
      <base-default-slider>
        <div
          v-for="(slide, key) in entry.sliderFavorites"
          :key="key"
          class="swiper-slide"
        >
          <div class="swiper-slide__inner">
            <n-link
              class="swiper-slide__link"
              :to="`/recipes/${slide.fields.slug}`"
            />
            <base-image
              :img-src="slide.fields.heroImage.fields.file.url"
            />
          </div>
        </div>
      </base-default-slider>
    </section>
    <section
      class="slider-wrapper breakfast section-inset-b ml-3"
    >
      <h6
        class="slider-wrapper__title"
      >
        Ontbijt
      </h6>
      <base-default-slider>
        <div
          v-for="(slide, key) in entry.sliderBreakfast"
          :key="key"
          class="swiper-slide"
        >
          <div class="swiper-slide__inner">
            <base-card
              recipe-card
              :src="slide.fields.heroImage.fields.file.url"
              :title="slide.fields.recipeTitle"
              :details="slide.fields.recipeDetails[0]"
              :link-to="`/recipes/${slide.fields.slug}`"
            />
          </div>
        </div>
      </base-default-slider>
    </section>

    <section
      class="slider-wrapper lunch section-inset-b ml-3"
    >
      <h6
        class="slider-wrapper__title"
      >
        Lunch
      </h6>
      <base-default-slider>
        <div
          v-for="(slide, key) in entry.sliderLunch"
          :key="key"
          class="swiper-slide"
        >
          <div class="swiper-slide__inner">
            <base-card
              recipe-card
              :src="slide.fields.heroImage.fields.file.url"
              :title="slide.fields.recipeTitle"
              :details="slide.fields.recipeDetails[0]"
              :link-to="`/recipes/${slide.fields.slug}`"
            />
          </div>
        </div>
      </base-default-slider>
    </section>

    <section
      class="slider-wrapper dinner section-inset-b ml-3"
    >
      <h6
        class="slider-wrapper__title"
      >
        diner
      </h6>
      <base-default-slider>
        <div
          v-for="(slide, key) in entry.sliderDiner"
          :key="key"
          class="swiper-slide"
        >
          <div class="swiper-slide__inner">
            <base-card
              recipe-card
              :src="slide.fields.heroImage.fields.file.url"
              :title="slide.fields.recipeTitle"
              :details="slide.fields.recipeDetails[0]"
              :link-to="`/recipes/${slide.fields.slug}`"
            />
          </div>
        </div>
      </base-default-slider>
    </section>
  </div>
</template>

<script>
export default {

  async fetch ({ store }) {
    await store.dispatch('entries/getEntry', {
      name: 'RecipesPage',
      id: 'wmjOMv4QhPY2FTd3gflsU'
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
      return this.$store.state.entries.data.RecipesPage.entry
    }
  },

  mounted () {
    console.log(this.entry)
  }
}
</script>

<style lang="scss" scoped>
.recipes {
  padding-bottom: rem(80px);
  margin-top: rem(50px);
}

.slider-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &__title {
    font-size: rem(16px);
    color: theme-color(secondary);
    text-transform: uppercase;
  }
}

.swiper-slide {
  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: rem(100px);
    overflow: hidden;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
}
</style>
