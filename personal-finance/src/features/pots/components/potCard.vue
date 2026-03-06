<script setup>
import { ref } from 'vue';
import menuPot from '@/features/pots/components/editPotDropdown.vue';
import withdraw from '@/features/pots/components/withdraw.vue';
import deposit from '@/features/pots/components/deposit.vue';
import {toPercent} from "@/utils/helpers.ts";

const isWithdraw = ref(false);
const isAdd = ref(false);
const props = defineProps({
  name:{
    type: String,
    required: false,
    default: 'Entertainment',
  },
  saved:{
    type: Number,
    required: false,
    default: 0
  },
  target:{
    type: Number,
    required: false,
    default: 0
  },

  color:{
    type: String,
    required: false,
    default: 'bg-blue-300'
  },
})
</script>

<template>
  <section class="grid flex-1 lg:basis-1/3 lg:max-w-1/2 bg-white px-5 py-6 rounded-2xl gap-8 min-w-85.75 h-79.25 shadow-cardShadow">
    <div class="flex h-6 justify-between items-center">
      <div class="flex gap-4 items-center">
        <div class="name-dot h-4 w-4 rounded-full"
           :class="`${props.color}`"></div>
        <p class="font-bold text-[20px]">{{props.name}}</p>
      </div>
      <menu-pot/>
    </div>
    <div class="grid gap-4">
      <p class="flex justify-between">
        <span>Total Saved</span>
        <span class="font-bold text-[32px]">${{props.saved}}</span>
      </p>
      <div class="grid gap-3">
        <div class="h-2 rounded-lg bg-peach">
          <transition name="grow" appear>
            <p :class="`${props.color} h-2 w-[10%] rounded-2xl`"></p>
          </transition>
        </div>
        <p class="flex justify-between">
          <span>{{toPercent(props.saved, props.target)}}%</span>
          <span>Target of ${{props.target}}</span>
        </p>
      </div>
    </div>
    <div class="flex justify-between h-13.25">
      <button
          @click="isAdd=true"
          class="flex items-center gap-2 w-36 p-4 font-bold hover:bg-white hover:outline-1 hover:outline-[#696868] bg-peach rounded-lg">
        <span>&#43 </span>
        <span>Add Money</span>
      </button>
      <button
          @click="isWithdraw=true"
          class="flex justify-center items-center w-36 p-4 hover:bg-white hover:outline-1 hover:outline-[#696868] font-bold bg-peach rounded-lg">
        <span class="">Withdraw</span>
      </button>
    </div>
  </section>

  <deposit v-if="isAdd" @close-modal="isAdd=false"/>
  <withdraw v-if="isWithdraw" @close-modal="isWithdraw=false"/>
</template>

<style scoped>

.grow-enter-from{
  width: 0;
  opacity: 0;
}

.grow-leave-to {
  width: 0;
  opacity: 1;
}
.grow-enter-active,
.grow-leave-active {
  transition: width 0.8s ease;
}
</style>