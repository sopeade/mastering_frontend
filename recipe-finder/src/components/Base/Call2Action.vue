<script setup>
import knife from "@/assets/images/pattern-knife.svg"
import fork from "@/assets/images/pattern-fork.svg"
import squiggle1 from "@/assets/images/pattern-squiggle-1.svg"
import squiggle2 from "@/assets/images/pattern-squiggle-2.svg"
</script>

<template>
  <div class="grid gap-1  bg-lightgreen h-89 rounded-2xl place-items-center p-8 relative overflow-hidden lg:w-full">
    <h1 class="text-5xl font-extrabold text-center z-10">Ready to cook smarter?</h1>
    <p class="text-xl text-center z-10">Hit the button, pick a recipe, and get dinner on the table--fast.</p>
    <button class="bg-darkgreen w-44 h-14 rounded-2xl mx-auto text-white font-bold text-xl text-center">
      <RouterLink :to="{name: 'recipes'}">
        Browse recipes
      </RouterLink>
    </button>
    <figure class="hidden md:block w-43 h-43 2lg:w-84 2lg:h-84 absolute md:right-0 md:-top-11 2lg:top-0.5 2lg:-right-16">
      <img :src="knife" alt="">
    </figure>
    <figure class="hidden md:block w-43 h-43 2lg:w-78 2lg:h-97 absolute md:-left-5 md:bottom-8 2lg:-bottom-10 2lg:-left-22">
      <img :src="fork" alt="">
    </figure>
  </div>
</template>
