<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isMenuOpen = ref(false);
const isLargeMenuOpen = ref(false);
const mycomp = ref(null)
const closeMenu = (event)=>{
if (mycomp.value && !mycomp.value.contains(event.target)){
  isLargeMenuOpen.value = false;
  isMenuOpen.value = false;
}
}
onMounted(()=>{
  document.addEventListener('click', closeMenu)
})
onBeforeUnmount(()=>{
  document.removeEventListener('click', closeMenu)
})
</script>

<template>
<!--  Hamburger mobile-->
  <div class="relative" ref="mycomp">
    <button class="grid place-content-center bg-lightgreen w-10 h-10 rounded-lg gap-1 lg:hidden"
          @click="isMenuOpen=!isMenuOpen">
        <span class="bg-darkgreen w-4.5 h-0.5 rounded-lg"></span>
        <span class="bg-darkgreen w-4.5 h-0.5 rounded-lg"></span>
        <span class="bg-darkgreen w-4.5 h-0.5 rounded-lg"></span>
    </button>
    <section class="absolute top-11 right-0" v-if="isMenuOpen"
            :class="{'lg:hidden': isMenuOpen}">
      <ul class="grid gap-1 w-86 h-57 p-2 bg-white rounded-xl pl-2 ">
          <RouterLink :to="{name: 'home'}">
            <li class="focus:bg-darkgreen rounded-xl h-full focus:text-white flex items-center pl-2" tabindex="0">
              Home
            </li>
          </RouterLink>
            <RouterLink :to="{name: 'about'}">
              <li class="focus:bg-darkgreen rounded-xl h-full focus:text-white flex items-center pl-2" tabindex="0">
                About
              </li>
            </RouterLink>
          <RouterLink :to="{name: 'recipes'}">
            <li class="focus:bg-darkgreen rounded-xl h-full focus:text-white flex items-center pl-3" tabindex="0">
               Recipes
            </li>
          </RouterLink>
        <li class="flex justify-center items-center bg-darkgreen text-white rounded-xl">Browse recipes</li>
      </ul>
    </section>

    <button class="hidden bg-darkgreen text-white h-fit p-4 rounded-2xl lg:block focus:outline-2
        focus:outline-darkgreen focus:outline-offset-2"
          @click="isLargeMenuOpen=!isLargeMenuOpen">
      Browse recipes
    </button>
    <section class="absolute top-16 right-0" v-if="isLargeMenuOpen"
            :class="{'hidden lg:block': isLargeMenuOpen}">
      <ul class="grid gap-1 w-176 h-57 p-2 bg-white rounded-xl pl-2">
                 <RouterLink :to="{name: 'home'}">
            <li class="focus:bg-darkgreen rounded-xl h-full focus:text-white flex items-center pl-2" tabindex="0">
              Home
            </li>
          </RouterLink>
            <RouterLink :to="{name: 'about'}">
              <li class="focus:bg-darkgreen rounded-xl h-full focus:text-white flex items-center pl-2" tabindex="0">
                About
              </li>
            </RouterLink>
          <RouterLink :to="{name: 'recipes'}">
            <li class="focus:bg-darkgreen rounded-xl h-full focus:text-white flex items-center pl-3" tabindex="0">
               Recipes
            </li>
          </RouterLink>
        <RouterLink :to="{name: 'recipes'}">
          <li class="flex justify-center items-center h-full bg-darkgreen text-white rounded-xl">Browse recipes</li>
        </RouterLink>
      </ul>
    </section>
  </div>
</template>

