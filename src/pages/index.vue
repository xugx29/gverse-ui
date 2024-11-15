<template>
  <LoadingBar />
  <v-btn
        @click="toggleTheme"
        variant="text"
        :icon="
            currentTheme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        "
  />
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
const currentTheme = computed(() => theme.global.name.value)

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'customLight' : 'customDark'
  localStorage.setItem('theme', currentTheme.value)
}
</script>
