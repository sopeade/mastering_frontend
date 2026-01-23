<script setup>
import { ref } from "vue";

const xyz = ref('@/assets/images/mediterranean-chickpea-salad-small.webp')

</script>

<template>
  <p>Lorem ipsum dolor sit amet.</p>
  <p>Lorem ipsum.</p>
  <p>Happiness</p>
  <img class="w-20 h-20" :src="xyz" alt="">
  <p>Happiness2</p>
</template>