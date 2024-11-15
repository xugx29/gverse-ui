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
    welcomeColor: '#000000'
  },
  variables: {
     
  }
}

const customDark = {
  dark: true,
  colors: {
    background: '#000',
    welcomeColor: '#ffffff'
  },
  variables: {
     
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: localStorage.getItem('theme') || 'customDark',
    themes: {
      customDark,
      customLight,
    },
  },
})
