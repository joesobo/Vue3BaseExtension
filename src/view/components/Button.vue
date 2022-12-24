<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <button @click="increment">
      increment
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let count = ref(0)

const increment = () => {
	count.value++
}
</script>
