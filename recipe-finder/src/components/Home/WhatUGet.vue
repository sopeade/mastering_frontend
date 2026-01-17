<script setup>
import wholeFood from "@/assets/images/icon-whole-food-recipes.svg"
import minFuss from "@/assets/images/icon-minimum-fuss.svg"
import searchSecs from "@/assets/images/icon-search-in-seconds.svg"
</script>


<template>
    <div class="flex flex-col gap-12 border-b-1 border-b-lightgreen pb-20">
      <h1 class="text-5xl font-extrabold lg:text-center">What you'll get</h1>
      <div class="flex flex-col gap-8 lg:flex-row justify-between">
        <article class="flex flex-col gap-5">
          <figure class="flex justify-center items-center w-15 h-15 bg-white rounded-2xl">
            <img :src="wholeFood" width=24 height=34 alt="" class="w-6 h-3xl object-cover bg-transparent">
          </figure>
          <div class="flex flex-col gap-2">
            <h3 class="font-bold text-3xl">Whole-food recipes</h3>
            <p class="text-xl font-medium">Each dish uses everyday, unprocessed ingredients.</p>
          </div>
        </article>

        <article class="flex flex-col gap-5">
          <figure class="flex justify-center items-center w-15 h-15 bg-white rounded-2xl">
            <img :src="minFuss" width=40 height=42 alt="" class="w-10 h-10 object-cover bg-transparent">
          </figure>
          <div class="flex flex-col gap-2">
            <h3 class="font-bold text-3xl">Minimum fuss</h3>
            <p class="text-xl font-medium">All recipes are designed to make eating healthy quick and easy.</p>
          </div>
        </article>

        <article class="flex flex-col gap-5">
          <figure class="flex justify-center items-center w-15 h-15 bg-white rounded-2xl">
            <img :src="searchSecs" width=40 height=40 alt="" class="w-10 h-10 object-cover bg-transparent">
          </figure>
          <div class="flex flex-col gap-2">
            <h3 class="font-bold text-3xl">Search in seconds</h3>
            <p class="text-xl font-medium">Filter by name or ingredients and jump straight to the recipe you need.</p>
          </div>
        </article>
      </div>
    </div>
</template>
