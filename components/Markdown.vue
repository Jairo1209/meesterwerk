<template>
  <div class="c-markdown">
    <slot name="before" />
    <div v-html="$md.render(md)" />
    <slot name="after" />
  </div>
</template>

<script>
export default {
  name: 'Markdown',

  props: {
    md: {
      type: String,
      required: true
    }
  }
}
</script>
