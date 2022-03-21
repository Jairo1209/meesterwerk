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
            <base-image
              :img-src="slide.fields.img.fields.file.url"
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
          v-for="(slide, key) in entry.sliderFavorites"
          :key="key"
          class="swiper-slide"
        >
          <div class="swiper-slide__inner">
            <base-card
              :src="slide.fields.img.fields.file.url"
            />
          </div>
        </div>
      </base-default-slider>
    </section>
    <!--
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
          v-for="(slide, key) in entry.sliderFavorites"
          :key="key"
          class="swiper-slide"
        >
          <div class="swiper-slide__inner">
            <base-image
              :img-src="slide.fields.img.fields.file.url"
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
          v-for="(slide, key) in entry.sliderFavorites"
          :key="key"
          class="swiper-slide"
        >
          <div class="swiper-slide__inner">
            <base-image
              :img-src="slide.fields.img.fields.file.url"
            />
          </div>
        </div>
      </base-default-slider>
    </section> -->
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
    // max-height: rem(120px);
    overflow: hidden;
  }
}
</style>
