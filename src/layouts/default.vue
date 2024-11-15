<template>
  <v-app>
    <v-main>
      <Transition
        appear
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
        mode="out-in"
      >
        <div :key="$route.path" class="router-container w-full h-full"><router-view /></div>
      </Transition>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
//
</script>
