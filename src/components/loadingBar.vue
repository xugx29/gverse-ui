<template>
  <div class="abc">
    <v-progress-linear rounded color="red" v-model="num" />
    <v-btn>123123</v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const num = ref(0)
const step = ref<number>(1)
const timer = ref<number>(0)
</script>
