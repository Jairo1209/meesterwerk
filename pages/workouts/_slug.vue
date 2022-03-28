<template>
  <div class="workout-detailpage">
    <layout-return link-to="/workouts" />
    <div class="workout-detailpage__hero-img">
      <div class="workout-detailpage__overlay" />
      <img
        :src="`${entry.heroImg.fields.file.url}?fit=fill&w=2000&h=1500&q=80&fm=jpg&fl=progressive`"
        :alt="entry.workoutTitle"
      >
    </div>
    <div class="container">
      <div class="mt-2">
        <span>{{ entry.workoutDetails }}</span>
      </div>
      <div class="workout-detailpage__title mt-3 mb-5">
        <h1 class="h4 text-uppercase m-0">
          {{ entry.workoutTitle }}
        </h1>
      </div>
      <div class="workout-detailpage__subtitle pb-1">
        <strong>OEFENINGEN</strong>
      </div>
      <div class="workout-detailpage__exercises-list">
        <section class="section-inset-b">
          <div class="row">
            <div class="col-md-12">
              <div
                v-for="(item, key) in entry.exercisesList"
                :key="key"
                class="accordeon-item"
              >
                <button
                  ref="accordion"
                  class="accordion"
                >
                  <h6
                    v-if="item.fields.title"
                    class="h6"
                  >
                    {{ item.fields.title }}
                  </h6>

                  <div class="accordion__cross">
                    <span class="cross-line" />
                    <span class="cross-line" />
                  </div>
                </button>
                <div
                  v-if="item.fields.body"
                  ref="panel"
                  class="panel"
                >
                  <p>{{ item.fields.body }}</p>

                  <div
                    v-if="item.fields.img.fields.file.url"
                    class="panel__image"
                  >
                    <img
                      :src="item.fields.img.fields.file.url"
                      alt="exercise"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch ({ store, route }) {
    await store.dispatch('entries/getSlug', {
      content_type: 'workoutPage',
      slug: route.params.slug
    })
  },

  head () {
    return {
      bodyAttrs: {
        class: 'theme-light'
      }
    }
  },

  computed: {
    entry () {
      return this.$store.state.entries.data.workoutPage.slugEntry
    }
  },

  mounted () {
    this.accordeon()
  },

  methods: {
    accordeon () {
      const acc = this.$refs.accordion
      let i
      if (acc) {
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener('click',
            function () {
              this.classList.toggle('active')
              const panel = this.nextElementSibling
              if (panel.classList.contains('active')) {
                panel.classList.remove('active')
              } else {
                panel.classList.add('active')
              }
            })
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.workout-detailpage {
  position: relative;
  min-height: 100vh;
  padding-bottom: rem(80px);

  body.theme-light & {
    background-color: theme-color(primary);
  }

  &__subtitle {
    border-bottom: solid 1px #fff;
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

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 40%;
  }
}

span {
  font-size: 14px;
}

.accordion {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 18px 0;
  font-size: 15px;
  color: theme-color(light);
  text-align: left;
  cursor: pointer;
  border: none;
  outline: none;

  &__cross {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
  }

  span {
    display: block;
    width: 100%;
    height: rem(2px);
    background-color: theme-color(light);
    transition: opacity .1s ease;

    &:nth-of-type(1) {
      position: absolute;
      top: 50%;
    }

    &:nth-of-type(2) {
      position: absolute;
      top: 50%;
      transform: rotate(90deg);
    }
  }

  h6 {
    color: white;
  }

  &.active {
    span {
      &:nth-of-type(2) {
        opacity: 0;
      }
    }
  }
}

.panel {
  max-height: 0;
  // padding: 0 18px;
  overflow: hidden;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1);

  &__image {
    object-fit: contain;
    width: 100%;

    img {
      object-fit: contain;
    }
  }
}

.active {
  max-height: 800px;
  transition: max-height 1s ease-in-out;
}

.centered-box {
  text-align: center;

  &__title {
    color: theme-color(light);
  }

  &__body {
    font-size: rem(18px);
  }
}
</style>
