import { createVuetify } from 'vuetify'
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
      // ... your configuration
    })
    nuxtApp.vueApp.use(vuetify)
})
