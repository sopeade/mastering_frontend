<script setup>
  import { ref, reactive, onMounted, onBeforeUnmount, onUpdated, watch, computed } from "vue";
  import { meals } from "@/data.ts";
  const showRecipeDetails = ref(Array(meals.length).fill(false));
  const cardIdx = ref(0);
  const prepTime = ref(false);
  const cookTime = ref(false);
  const dropdownRef = ref(null)
  onUpdated(()=>{
    // console.log("showRecipeDetails", showRecipeDetails.value)
    // console.log("prepTime", prepTime.value)
    // console.log("cookTime", cookTime.value)
  })
  const toggleDetails = (idx)=>{
    cardIdx.value = idx;
    const val = !showRecipeDetails.value[idx]
    showRecipeDetails.value = Array(meals.length).fill(false)
    showRecipeDetails.value[idx] = val
  }

  const scrollToTop = ()=>{
    console.log("scrollToTop")
    window.scrollTo({top:0, behavior: 'smooth'})
  }

 const handleClickOutside = (event) => {
  // Close only if click is outside the dropdown
  //  console.log("dropdownRef.value", dropdownRef.value)
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    prepTime.value = false;
    cookTime.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="grid gap-6">
    <div class="flex flex-col gap-3 sm:flex-row sm:justify-between"
    v-if="!showRecipeDetails[cardIdx]">
      <div class="flex flex-col gap-3 relative sm:flex-row" ref="dropdownRef">
        <button class="flex h-12 justify-center items-center gap-1 px-3.5 bg-white rounded-xl
        hover:outline-1 focus-within:outline-2 focus-within:hover:outline-2 focus-within:outline-offset-2 focus-within:outline-darkgreen"
              @click="prepTime=!prepTime; cookTime=false">
          <span class="">Max Prep Time</span>
          <img class="w-5 h-5" src="@/assets/images/icon-chevron-down.svg" alt="dropdown">
        </button>
        <article class="w-60 h-43 absolute p-2 top-14 -left-1 rounded-xl bg-white border border-gray-400"
                 v-show="prepTime">
            <section class="flex flex-col justify-between h-full *:h-9 *:pl-2 *:cursor-pointer
                  *:focus-within:border *:focus-within:border-darkgreen *:rounded-xl">
              <label for="zero" class="flex" tabindex="0">
                <input class="mr-2 " id="zero" name="prepTime" type="radio">
                <span class="self-center">0 minutes</span>
              </label>
              <label for="five" class="flex" tabindex="0">
                <input class="mr-2" id="five" name="prepTime" type="radio">
                <span class="self-center">5 minutes</span>
              </label>
              <label for="ten" class="flex" tabindex="0">
                <input class="mr-2" id="ten" name="prepTime" type="radio">
                <span class="self-center">10 minutes</span>
              </label>
              <span>Clear</span>
            </section>
        </article>

        <button class="flex h-12 justify-center items-center gap-1 px-3.5 bg-white rounded-xl
        hover:outline-1 focus-within:outline-2 focus-within:hover:outline-2 focus-within:outline-offset-2 focus-within:outline-darkgreen"
          @click="cookTime=!cookTime; prepTime=false">
          <span class="">Max Cook Time</span>
          <img class="w-5 h-5" src="@/assets/images/icon-chevron-down.svg" alt="dropdown">
        </button>

        <article class="w-60 h-65 p-2 absolute -left-1 top-29 md:top-14 md:left-42 z-1 rounded-xl bg-white border border-gray-400"
                 v-show="cookTime">
          <section class="flex flex-col justify-between h-full *:h-9 *:pl-2 *:cursor-pointer
                *:focus-within:border *:focus-within:border-darkgreen *:rounded-xl">
            <label for="zero_2" class="flex">
              <input class="mr-2" id="zero_2" name="cookTime" type="radio">
              <span class="self-center">0 minutes</span>
            </label>
            <label for="five_2" class="flex">
              <input class="mr-2" id="five_2" name="cookTime" type="radio">
              <span class="self-center">5 minutes</span>
            </label>
            <label for="ten_2" class="flex">
              <input class="mr-2" id="ten_2" name="cookTime" type="radio">
              <span class="self-center">10 minutes</span>
            </label>
            <label for="fifteen" class="flex">
              <input class="mr-2" id="fifteen" name="cookTime" type="radio">
              <span class="self-center">15 minutes</span>
            </label>
            <label for="twenty" class="flex">
              <input class="mr-2" id="twenty" name="cookTime" type="radio">
              <span class="self-center">20 minutes</span>
            </label>
            <span>Clear</span>
          </section>
        </article>
      </div>

      <div class="flex h-12 min-w-66 justify-start items-center gap-1 px-3.5 overflow-hidden bg-white rounded-xl
         hover:outline-1 focus-within:outline-2 focus-within:hover:outline-2 focus-within:outline-offset-2 focus-within:outline-darkgreen"
          tabindex="0">
        <img class="w-5 h-5" src="@/assets/images/icon-search.svg" alt="Search">
        <label for="search" class="visually-hidden_raw">Search</label>
        <input class="w-full focus:outline-0 cursor-pointer" name="search" placeholder="Search by name or ingredient"/>
      </div>
    </div>
<!--    <article class="flex flex-row gap-4 cursor-pointer bg-white rounded-xl p-2">-->
    <article class="flex flex-row gap-4 cursor-pointer rounded-xl p-2"
             :class="{'hidden md:flex': showRecipeDetails[cardIdx]}"
             v-if="showRecipeDetails[cardIdx]"
             @click="toggleDetails(cardIdx)">
      <figure class="flex-1">
        <img class="rounded-xl md:hidden" :src="meals[cardIdx].image?.small" width="500" height="500" alt="">
        <img class="rounded-xl hidden md:block" :src="meals[cardIdx].image?.large" width="500" height="500" alt="">
      </figure>
      <div class="grid gap-4 h-full justify-between flex-1">
        <div class="">
          <h1 class="text-4xl font-bold w-full">{{meals[cardIdx].title}}</h1>
          <p class="">{{meals[cardIdx].overview}}</p>
        </div>
        <ul class="flex flex-wrap gap-4">
          <li class="flex flex-nowrap gap-1.5">
            <img class="w-5 h-5" src="@/assets/images/icon-servings.svg" alt="">
            <span class="whitespace-nowrap">Servings: {{meals[cardIdx].servings}}</span>
          </li>
          <li class="flex flex-nowrap gap-1.5">
            <img class="w-5 h-5" src="@/assets/images/icon-prep-time.svg" alt="">
            <span class="whitespace-nowrap">Prep: {{meals[cardIdx].prepMinutes}} min</span></li>
          <li class="flex flex-nowrap gap-1.5">
            <img class="w-5 h-5" src="@/assets/images/icon-cook-time.svg" alt="">
            <span class="whitespace-nowrap">Cook: {{meals[cardIdx].cookMinutes}} min</span>
          </li>
        </ul>
        <div class="">
          <h2 class="font-bold text-2xl">Ingredients:</h2>
          <ul class="flex gap-2"
              v-for="(val, idx) in meals[cardIdx].ingredients" :key="val.key">
            <img class="w-6 h-7.5"
                src="@/assets/images/icon-bullet-point.svg" alt="">
            <li class="self-center">{{val}}</li>
          </ul>
        </div>
        <div>
          <h2 class="font-bold text-2xl">Instructions:</h2>
          <ul class="flex gap-2"
              v-for="(val, idx) in meals[cardIdx].instructions" :key="val.key">
            <img class="w-6 h-7.5"
                 src="@/assets/images/icon-bullet-point.svg" alt="">
            <li class="self-center">{{val}}</li>
          </ul>
        </div>
      </div>
    </article>

    <hr class="w-screen relative left-1/2 my-24 right-1/2 -mx-[50vw] border border-lightgreen"
    v-if="showRecipeDetails[cardIdx]">
    <section class="grid gap-8 md:grid-cols-[repeat(auto-fit,minmax(343px,1fr))]">
      <template v-for="(card, idx) in meals" :key="card.key">
        <article class="flex flex-col gap-4 h-full cursor-pointer bg-white rounded-xl p-2 "
               :class="{'md:hidden ': showRecipeDetails[idx]}"
                @click="toggleDetails(idx); scrollToTop()">
          <figure>
            <img class="rounded-xl md:hidden" :src="card.image?.small" width="500" height="500" alt="">
            <img class="rounded-xl hidden md:block" :src="card.image?.large" width="500" height="500" alt="">
          </figure>
          <div class="grid grid-cols-1 gap-4 h-full justify-between">
            <div class="">
              <h1 class="h1_raw text-xl font-bold truncate">{{card.title}}</h1>
              <p class="">{{card.overview}}</p>
            </div>
            <ul class="flex flex-wrap gap-4">
              <li class="flex flex-nowrap gap-1.5">
                <img class="w-5 h-5" src="@/assets/images/icon-servings.svg" alt="">
                <span class="whitespace-nowrap">Servings: {{card.servings}}</span>
              </li>
              <li class="flex flex-nowrap gap-1.5">
                <img class="w-5 h-5" src="@/assets/images/icon-prep-time.svg" alt="">
                <span class="whitespace-nowrap">Prep: {{card.prepMinutes}} mins</span></li>
              <li class="flex flex-nowrap gap-1.5">
                 <img class="w-5 h-5" src="@/assets/images/icon-cook-time.svg" alt="">
                <span class="whitespace-nowrap">Cook: {{card.cookMinutes}} mins</span>
              </li>
            </ul>
            <button class="bg-darkgreen text-white h-12 rounded-3xl self-end"
                v-if="!showRecipeDetails[idx]">
              View Recipe
            </button>
            <div v-else>
              <div class="">
                <h2 class="font-bold text-2xl">Ingredients:</h2>
                <ul class="flex gap-2"
                    v-for="(val, idx) in meals[cardIdx].ingredients" :key="val.key">
                  <img class="w-6 h-7.5"
                       src="@/assets/images/icon-bullet-point.svg" alt="">
                  <li class="self-center">{{val}}</li>
                </ul>
              </div>
              <div>
                <h2 class="font-bold text-2xl">Instructions:</h2>
                <ul class="flex gap-2"
                    v-for="(val, idx) in meals[cardIdx].instructions" :key="val.key">
                  <img class="w-6 h-7.5"
                       src="@/assets/images/icon-bullet-point.svg" alt="">
                  <li class="self-center">{{val}}</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </template>

    </section>
  </div>



</template>

<style scoped>
.visually-hidden_raw {
  border: 0;
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  white-space: nowrap;
}



</style>
//.overlay_raw {
//  position: fixed;
//  inset: 0;
//  background: rgba(0, 0, 0, 0.5);
//  //display: flex;
//  //align-items: center;
//  justify-content: center;
//
//}
