<script setup lang="ts">
import Hamburger from "@/components/General/Hamburger.vue"
import logo from "@/assets/images/logo.svg";


</script>


<template>
  <div class="flex justify-between items-center h-18 px-8 2lg:px-15 md:h-23 border-b border-b-lightgreen">
    <img :src="logo" class="w-60.5 h-8" width="260" height="40" alt="">
    <div class="hidden lg:flex flex-row gap-15">
      <RouterLink :to="{name: 'home'}">
        <button class="decoration-orange-500 decoration-2 hover:underline hover:underline-offset-1 rounded-sm
            focus:outline-2 focus:outline-offset-2">
          Home
        </button>
      </RouterLink>
      <RouterLink :to="{name: 'about'}">
        <button class="decoration-orange-500 decoration-2 hover:underline hover:underline-offset-1 rounded-sm
            focus:outline-2 focus:outline-offset-2">
          About
        </button>
      </RouterLink>
      <RouterLink :to="{name: 'recipes'}">
        <button class="decoration-orange-500 decoration-2 hover:underline hover:underline-offset-1 rounded-sm
            focus:outline-2 focus:outline-offset-2">
          Recipes
        </button>
      </RouterLink>
    </div>
    <Hamburger/>
  </div>
</template>


<style scoped>

</style>