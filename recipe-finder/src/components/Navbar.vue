<script setup lang="ts">
import Hamburger from "@/components/General/Hamburger.vue"
import logo from "@/assets/images/logo.svg";


</script>


<template>
  <div class="flex justify-between items-center h-[72px] px-8 2lg:px-15 md:h-[92px] border-b-1 border-b-lightgreen">
    <img :src="logo" class="w-[242px] h-[32px]" width="260" height="40" alt="">
    <div class="hidden 2lg:flex flex-row gap-15 :underline">
      <RouterLink :to="{name: 'home'}">
        <div class="active:underline decoration-orange-500 decoration-2 focus:underline-offset-1"
          >
          Home
        </div>
      </RouterLink>
      <RouterLink :to="{name: 'about'}">
        <div class="active:underline decoration-orange-500 decoration-2 focus:underline-offset-1"
          >
          About
        </div>
      </RouterLink>
      <RouterLink :to="{name: 'recipes'}">
        <div class="active:underline decoration-orange-500 decoration-2 focus:underline-offset-1"
          >
          Recipes
        </div>
      </RouterLink>
    </div>
    <Hamburger/>
  </div>
</template>


<style scoped>

</style>