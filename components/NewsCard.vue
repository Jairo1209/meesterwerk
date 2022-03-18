<template>
  <div class="c-card">
    <figure
      v-if="thumbnail"
      class="c-card__thumbnail"
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
    <h4 class="c-card__title">
      {{ title }}
    </h4>
    <p
      v-if="body"
      class="c-card__body"
    >
      {{ body }}
    </p>
    <n-link :to="`news/${slug}`">
      Read article
    </n-link>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',

  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      default: ''
    },
    thumbnail: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      thumb: {
        width: 800,
        height: 1200
      }
    }
  },

  computed: {
    // You can crop images with the Contentful Image API https://www.contentful.com/developers/docs/references/images-api/
    webp () {
      return `${this.thumbnail}?w=${this.thumb.width}&h=${this.thumb.height}&f=face&fit=thumb&fm=webp&q=80`
    },
    jpeg () {
      return `${this.thumbnail}?w=${this.thumb.width}&h=${this.thumb.height}&f=face&fit=thumb&fm=jpg&fl=progressive&q=80`
    }
  }
}
</script>

<style lang="scss" scoped>
.c-card {
  position: relative;
  display: block;
  margin-bottom: 30px;

  &__thumbnail {
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;
    background-color: #f4f4f4;

    &::before {
      display: block;
      width: 100%;
      padding-top: (3 / 2) * 100%; // 3:4 aspect ratio https://andrew.hedges.name/experiments/aspect_ratio/
      content: '';
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
