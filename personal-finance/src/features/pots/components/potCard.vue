<script setup>
import { ref } from 'vue';

const props = defineProps({
  potName:{
    type: String,
    required: false,
    default: 'Entertainment',
  },
  target:{
    type: Number,
    required: false,
  },
  color:{
    type: String,
    required: false,
    default: 'bg-blue-300'
  },
})
console.log(props.color)
</script>

<template>
  <section class="grid flex-1 lg:basis-1/3 lg:max-w-1/2 bg-white px-5 py-6 rounded-2xl gap-8 min-w-85.75 h-79.25">
    <div class="flex h-6 justify-between items-center">
      <div class="flex gap-4 items-center">
        <div class="name-dot h-4 w-4 rounded-full"
           :class="`${props.color}`"></div>
        <p class="font-bold text-[20px]">{{props.potName}}</p>
      </div>
      <img class="h-4 w-4" src="@/assets/images/icon-ellipsis.svg" alt="">
    </div>
    <div class="grid gap-4">
      <p class="flex justify-between">
        <span>Total Saved</span>
        <span class="font-bold text-[32px]">$159</span>
      </p>
      <div class="grid gap-3">
        <div class="h-2 rounded-lg bg-peach">
         <p :class="`${props.color} h-2 w-[10%] rounded-2xl`"></p>
        </div>
        <p class="flex justify-between">
          <span>7.95%</span>
          <span>Target of $2,000</span>
        </p>
      </div>
    </div>
    <div class="flex justify-between h-13.25">
      <button class="flex items-center w-36 p-4 font-bold bg-peach rounded-lg ">
        <i class="material-icons scale-80">add</i>
        <span>Add Money</span>
      </button>
      <button class="flex justify-center items-center w-36 p-4 font-bold bg-peach rounded-lg">
        <span class="">Withdraw</span>
      </button>
    </div>
  </section>

</template>

<style scoped>

</style>