/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const customLight = {
  dark: false,
  colors: {
    background: '#CACACA',
  },
  variables: {
  }
}

const customDark = {
  dark: true,
  colors: {
    background: '#000'
  },
  variables: {
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'customDark',
    themes: {
      customDark,
      customLight,
    },
  },
})
