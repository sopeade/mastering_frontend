<script setup lang="ts">
import Hamburger from "@/components/General/Hamburger.vue"
import logo from "@/assets/images/logo.svg";


</script>


<template>
  <div class="flex justify-between content-center max-w-[375px] h-[72px] md:max-w-[768px] md:h-[92px] lg:max-w-[1440px] ">
    <img :src="logo" class="w-[242px] h-[32px]" width="260" height="40" alt="">
    <div class="flex border-2 gap-5">
      <div>Home</div>
      <div>About</div>
      <div>Recipes</div>
    </div>
    <Hamburger/>
  </div>
</template>