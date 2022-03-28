<template>
  <div class="landingspage">
    <section class="landingspage__wrapper section-inset-y container">
      <div class="landingspage__content">
        <h1 class="m-0">
          {{ entry.subtTitle }}
        </h1>
        <p class="mt-5">
          Neem het heft in eigen handen. Kook gezond, begin met sporten en gebruik de juiste supplementen met <strong>MYLIFE</strong>
          <br><br>
          <strong>MYLIFE</strong> is een health app die voeding combineert met sport. In deze app kunt u gebruik
          maken van de beste recepten, sportschema's en informatie over supplementen.
        </p>
        <div class="landingspage__devices">
          <base-svg name="icon-awesome-apple" />
          <base-svg name="icon-awesome-android" />
          <base-svg name="icon-awesome-google" />
        </div>
      </div>
      <div class="landingspage__mockup">
        <img
          :src="entry.mockup.fields.file.url"
          alt="mockup"
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'landingspage',

  async fetch ({ store }) {
    await store.dispatch('entries/getEntry', {
      name: 'landingPage',
      id: '1h0nsa8SsXi2UWlNiuyI1m'
    })
  },

  computed: {
    entry () {
      return this.$store.state.entries.data.landingPage.entry
    }
  },

  mounted () {
    console.log(this.entry)
  }

}
</script>

<style lang="scss" scoped>
.landingspage {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(180deg, theme-color(primary) 70%, theme-color(secondary) 30%);

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;

    @include media-breakpoint-up(md) {
      flex-direction: row;
      justify-content: space-around;
    }
  }

  &__devices {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 215px;
    padding: 10px 10px;
    font-size: 25px;
    color: #000;
    background-color: #fff;
    border-radius: 50px;
  }

  &__content {
    max-width: rem(400px);
  }

  &__mockup {
    display: flex;
    align-items: center;
    width: 300px;
    height: 500px;
    margin-top: 75px;
    overflow: hidden;

    img {
      height: rem(900px);
      object-fit: cover;
    }

    @include media-breakpoint-up(md) {
      margin-top: 0;
    }
  }
}

h1 {
  font-size: 50px;
  color: #fff;
  text-transform: inherit;
}

p {
  font-size: 16.5px;
}
</style>
