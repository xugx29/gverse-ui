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
    welcomeColor: '#000000',
    textColor: '#000000',
    inputBorderColor: '#000000',
  },
  variables: {
    gverseLoginBtnHoverBg: 'rgb(255,255,255)',
    gverseLoginBtnHoverShadow: 'auto',
  },
}

const customDark = {
  dark: true,
  colors: {
    background: '#000',
    welcomeColor: '#ffffff',
    textColor: '#ffffff',
    inputBorderColor: '#ffffff',
  },
  variables: {
    gverseLoginBtnHoverBg: 'linear-gradient(268.27deg, #2e004f 0%, #4827ab 48.78%, #41005a 95.58%)',
    gverseLoginBtnHoverShadow: '0px 4px 4px 0px #ffffff inset',
  },
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
