<template>
  <header class="c-hero">
    <figure
      v-if="image"
      class="c-hero__image"
    >
      <picture>
        <source
          :srcset="webp"
          type="image/webp"
        >
        <source
          :srcset="jpeg"
          type="image/jpeg"
        >
        <img
          :src="jpeg"
          :alt="title"
        >
      </picture>
    </figure>
    <n-link
      class="c-hero__btn"
      to="/news"
    >
      Back to news
    </n-link>
    <div class="l-container">
      <h1 class="c-hero__title">
        {{ title }}
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Hero',

  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      size: {
        width: 1440,
        height: 1000
      }
    }
  },

  computed: {
    // You can crop images with the Contentful Image API https://www.contentful.com/developers/docs/references/images-api/
    webp () {
      return `${this.image}?w=${this.size.width}&h=${this.size.height}&f=face&fit=thumb&fm=webp&q=80`
    },
    jpeg () {
      return `${this.image}?w=${this.size.width}&h=${this.size.height}&f=face&fit=thumb&fm=jpg&fl=progressive&q=80`
    }
  }
}
</script>

<style lang="scss" scoped>
.c-hero {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 900px;
  margin-bottom: 150px;
  background-color: #f4f4f4;

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__btn {
    position: absolute;
    top: 50px;
    left: 50px;
  }

  &__title {
    margin-bottom: 0;
    transform: translate3d(0, 150px, 0);
  }
}
</style>
