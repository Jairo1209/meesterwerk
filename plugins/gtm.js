import event from '~/plugins/event.js'

const GTM_ID = process.env.GTM_ID

const update = (gtm) => {
  gtm.push({ event: 'updateCookie' })
}

export default ({ $gtm, route }) => {
  event.$on('onCookieSave', () => update($gtm))
  update($gtm)

  $gtm.init(GTM_ID)
}
