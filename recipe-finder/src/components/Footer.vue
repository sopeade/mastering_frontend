<script setup lang="ts">
import instagramIcon from "@/assets/images/icon-instagram.svg"
import tiktokIcon from "@/assets/images/icon-tiktok.svg"
import blueskyIcon from "@/assets/images/icon-bluesky.svg"
</script>

<template>
  <div class="grid h-30 justify-center items-center py-4 md:grid-flow-col md:justify-between">
    <div class="flex gap-6 w-fit md:order-2">
      <figure class="h-8">
        <img class="w-full h-full object-contain" :src="instagramIcon" alt="">
      </figure>
      <figure class="h-8">
        <img class="w-full h-full object-contain" :src="tiktokIcon" alt="">
      </figure>
      <figure class="h-8">
        <img class="w-full h-full object-contain" :src="blueskyIcon" alt="">
      </figure>
    </div>
    <div class="md:order-1">
      <p class="">Made with <span class="text-red-600">&#10084</span> and <span>&#129361</span></p>
    </div>
  </div>

</template>