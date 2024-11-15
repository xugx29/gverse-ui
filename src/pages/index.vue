<template>
  <!-- <LoadingBar /> -->
  <div @click="router.push('/login')" class="text20Px">to login</div>
  <v-btn
    @click="toggleTheme"
    variant="text"
    :icon="currentTheme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
  />
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify'
import { useRouter } from 'vue-router'
const router = useRouter()
const theme = useTheme()
const currentTheme = computed(() => theme.global.name.value)

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'customLight' : 'customDark'
  localStorage.setItem('theme', currentTheme.value)
}
</script>
