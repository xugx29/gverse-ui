<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition>
      <KeepAlive>
        <component :is="Component"></component>
      </KeepAlive>
    </Transition>
  </RouterView>
</template>
