<script setup>
import ValueProp from "@/components/Base/ValueProp.vue"
import choppingGreens from "@/assets/images/image-home-real-life-small.webp"
</script>

<template>
  <ValueProp>
  <template #header>
    Built for real life
  </template>
  <template #description>
    <div class="grid gap-3">
      <p>
        Cooking shouldn't be complicated. These recipes come in under
        30 minutes of active time, fit busy schedules, and taste good
        enough to repeat.
      </p>
      <p>
        Whether you're new to the kitchen or just need fresh ideas,
        we've got you covered.
      </p>

    </div>
  </template>
  <template #image>
    <figure class="">
      <img class="rounded-2xl border-white border-6" :src="choppingGreens" alt="">
    </figure>
  </template>
  </ValueProp>
</template>
