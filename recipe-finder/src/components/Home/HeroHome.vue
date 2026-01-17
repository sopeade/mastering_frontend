<script setup>
import Hero from "@/components/Base/Hero.vue"
import femaleCook from "@/assets/images/image-home-hero-small.webp"
import femaleCook_lrg from "@/assets/images/image-home-hero-large.webp"
</script>


<template>
    <Hero>
        <template #header>
          <h1 class="text-[52px]/14 font-extrabold lg:text-center">
            Healthy meals, zero fuss
          </h1>
        </template>
        <template #description>
          <p class="text-[20px] lg:text-center">
            Discover eight quick, whole-food recipes that you can cook
            tonight <span class="2lg:block">—no processed junk, no guesswork.</span>
          </p>
        </template>
        <template #hero_button>
          <button class="bg-darkgreen w-49 h-15 rounded-2xl text-white font-bold text-xl lg:mx-auto 2lg:text-center" >
            Start exploring
          </button>
        </template>
        <template #image>
          <figure class="">
            <img class="rounded-2xl object-cover border-6 border-white 2lg:hidden" :src="femaleCook" alt="">
            <img class="hidden 2lg:block rounded-2xl object-cover border-6 border-white" :src="femaleCook_lrg" alt="">
          </figure>
        </template>
    </Hero>
    </template>
