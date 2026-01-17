<script setup>
import Hero from "@/components/Base/Hero.vue"
import femaleChopping from "@/assets/images/image-about-our-mission-small.webp"
import femaleChopping_lrg from "@/assets/images/image-about-our-mission-large.webp"
</script>

<template>
    <div class="grid justify-between gap-8 mt-12 mb-48 2lg:mt-20 2lg:justify-center 2lg:grid-cols-2">
      <div class="flex flex-col gap-7 justify-center ">
          <h4 class="bg-orange-300 w-fit rounded-md px-2 py-1">Our mission</h4>
          <h1 class="text-5xl font-extrabold">
            Help more people cook nourishing meals, more often.
          </h1>
          <p class="text-xl">
            Healthy Recipe Finder was created to prove that healthy eating can be convenient,
            affordable, and genuinely delicious.
          </p>

          <p class="text-xl">
            We showcase quick, whole-food dishes that anyone can master—no fancy equipment,
            no ultra-processed shortcuts—just honest ingredients and straightforward steps.
          </p>
      </div>
      <div class="self-center border-2 border-blue-500">
          <figure class="">
            <img class="rounded-2xl object-cover border-6 border-white 2lg:hidden" :src="femaleChopping" alt="">
            <img class="hidden 2lg:block rounded-2xl object-cover border-6 border-white" :src="femaleChopping_lrg" alt="">
          </figure>
      </div>
    </div>

</template>