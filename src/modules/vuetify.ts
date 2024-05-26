import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'

import type { UserModule } from '~/types'

/* https://vuetifyjs.com/en/getting-started/installation/#existing-projects */

export const install: UserModule = ({ app }) => {
  const vuetify = createVuetify({
    blueprint: md3,
    theme: {
      defaultTheme: 'dark',
    },
  })
  app.use(vuetify)
}

export default install
