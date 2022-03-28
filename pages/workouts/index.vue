<template>
  <div class="workouts section-inset-t">
    <section class="section-inset-b container">
      <div class="workout__plans">
        <base-card
          class="mt-5 mb-5 fullbody"
          workout-card
          :src="entry.workoutPlans[0].fields.heroImg.fields.file.url"
          :title="entry.workoutPlans[0].fields.title"
          :details="entry.workoutPlans[0].fields.workoutDetails"
          :link-to="`/workouts/${entry.workoutPlans[0].fields.slug}`"
        />
        <base-card
          class="mt-5 mb-5 lowerbody"
          workout-card
          :src="entry.workoutPlans[1].fields.heroImg.fields.file.url"
          :title="entry.workoutPlans[1].fields.title"
          :details="entry.workoutPlans[1].fields.workoutDetails"
          :link-to="`/workouts/${entry.workoutPlans[1].fields.slug}`"
        />
        <base-card
          class="mt-5 mb-5 upperbody"
          workout-card
          :src="entry.workoutPlans[2].fields.heroImg.fields.file.url"
          :title="entry.workoutPlans[2].fields.title"
          :details="entry.workoutPlans[2].fields.workoutDetails"
          :link-to="`/workouts/${entry.workoutPlans[2].fields.slug}`"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {

  async fetch ({ store }) {
    await store.dispatch('entries/getEntry', {
      name: 'workoutOverviewPage',
      id: '3TZJccgCpOEQw0K2yQJHhi'
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
      return this.$store.state.entries.data.workoutOverviewPage.entry
    }
  }
}
</script>

<style lang="scss" scoped>
.workouts {
  position: relative;
  min-height: 100vh;
  padding-top: rem(50px);
  padding-bottom: rem(80px);

  body.theme-light & {
    background-color: theme-color(primary);
  }
}
</style>
