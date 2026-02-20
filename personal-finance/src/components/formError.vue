<script setup>
  import warning from "@/assets/images/warning.svg"

  defineProps({
    error: Boolean | String,
    errorMsg: String,
  })

</script>

<template>
  <div class="flex gap-2 h-8 border-0 justify-start"
    :class="{visible: error, invisible: !error}">
    <img class="h-full max-w-6" :src="warning" alt="">
    <span class="text-[0.75rem] self-center">{{error ? errorMsg : "An error occurred"}}</span>
  </div>
</template>
<style scoped>

</style>