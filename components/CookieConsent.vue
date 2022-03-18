<template>
  <div
    v-if="ccShow"
    class="cookie-consent"
  >
    <h5>This website uses cookies</h5>
    <div
      v-if="ccActiveOptions"
      class="cookie-consent__options py-2"
    >
      <label
        v-for="(options, key) in ccOptions"
        :key="key"
        :for="key"
        class="mr-1"
      >
        <input
          :id="key"
          v-model="ccOptions[key]"
          :disabled="key === 'necessary'"
          type="checkbox"
          name="cookiePreferences"
          :value="key"
        >
        {{ key }}
      </label>
    </div>

    <button
      type="button"
      name="preferences"
      @click="openPreferences"
    >
      Voorkeuren
    </button>

    <button
      type="button"
      name="cookieConsent"
      @click.prevent="onSave"
    >
      Accept cookies
    </button>
  </div>
</template>

<script>
import event from '~/plugins/event.js'

export default {
  name: 'CookieConsent',

  data () {
    return {
      ccActiveOptions: false,
      ccPreferences: '',
      ccCookie: null,
      ccShow: false,
      ccName: 'cookiePreferences',
      ccOptions: {
        necessary: true,
        preferences: false,
        statistics: false,
        marketing: false
      }
    }
  },

  created () {
    this.ccCookie = this.$uCookie.get(this.ccName)

    event.$on('openCookiePref', () => {
      this.open()
    })

    if (!this.ccCookie) { this.open() }
  },

  methods: {
    /**
     * Open preferences
     */
    openPreferences () {
      this.ccActiveOptions = true
    },

    /**
     * Save cookie settings
     * setting a cookie and emit a global event
     */
    onSave () {
      this.$uCookie.set(this.ccName, this.updatePreferences(), {
        path: '/',
        maxAge: 60 * 60 * 24 * 360
      })

      this.ccShow = false

      event.$emit('onCookieSave')
    },

    /**
     * Update preferences and convert to String
     */
    updatePreferences () {
      const filter = Object.keys(this.ccOptions)
        .reduce((o, key) => {
          this.ccOptions[key] === true && (o[key] = this.ccOptions[key])

          return o
        }, {})

      this.ccPreferences = Object.keys(filter).map(key => key)
      return this.ccPreferences.join(', ')
    },

    /**
     * Hide popup
     */
    hide () {
      this.ccShow = false
    },

    /**
     * Show popup
     */
    open () {
      this.ccShow = true
    }
  }
}
</script>

<style lang="scss" scoped>
.cookie-consent {
  position: fixed;
  right: rem($grid-gutter-width);
  bottom: rem($grid-gutter-width);
  max-width: rem(500px);
  padding: rem($grid-gutter-width);
  font-size: rem(12px);
  background-color: theme-color(dark);
  border: rem(1px) solid theme-color(danger);
  border-radius: rem(15px);

  input {
    appearance: auto;
  }

  button {
    padding: rem(3px);
    font-size: rem(16px);
    color: theme-color(light);
    border: 1px dashed #f42303;
    border-radius: rem(4px);
  }
}
</style>
