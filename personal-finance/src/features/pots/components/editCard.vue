<script setup>
import {ref, onMounted, onUnmounted, onUpdated} from "vue";
import Dropdown from "@/components/dropdown.vue";

const emit = defineEmits(['closeModal'])
const isMdUp = ref(false);
const widthSmall = '295px'
const widthMid = '496px'
const arr = ['a', 'b', 'c']
let mediaQuery
const showModal = ref(true);
const closeModal = () => {
  emit('closeModal')
}

onMounted(() => {
  mediaQuery = window.matchMedia("(min-width: 768px)")
  isMdUp.value = mediaQuery.matches
  console.log("isMdUp")
  mediaQuery.addEventListener("change", e => {
    isMdUp.value = e.matches;
  })
})

onUnmounted(() => {
  console.log("modal UNMOUNTED!")
  mediaQuery.removeEventListener("change", () => {})
})
onUpdated(() => {
  console.log("updated showmodal", showModal.value)
})
</script>

<template>
<div class="overlay flex justify-center items-center" @click.self="closeModal">
    <div :class="`bg-white w-83.75 md:w-140 h-127.5 md:h-122.5 rounded-lg py-6 px-5 md:p-8 grid gap-5`">
      <div class="flex justify-between h-9.5">
        <p class="text-[20px] md:text-[32px] font-bold">Edit Pot</p>
        <button @click="closeModal">
          <img src="@/assets/images/icon-close-modal.svg" alt="close">
        </button>
      </div>
      <p class="">If your saving targets change, feel free to update your pots.</p>
      <div class="flex flex-col justify-between h-58.25">
        <div class="">
          <span>Pot Name</span>
          <input class=" border w-full border-gray-400 rounded-lg h-11.25" type="text">
        </div>
        <div class="relative">
          <span>Target</span>
          <div class="target_local">
            <input class=" border w-full border-gray-400 rounded-lg h-11.25" type="text">
          </div>

        </div>
        <div class="">
          <span>Theme</span>
          <dropdown items="arr" :select-width="isMdUp ? widthMid : widthSmall"
                    select-focus-border="1px solid #696868" options-gap="3rem" id="budget"/>
        </div>
      </div>
      <button class="bg-black text-white rounded-lg h-13.25">Save Changes</button>
    </div>
</div>
</template>

<style scoped>
.overlay{
  background: rgba(0, 0, 0, 0.5);
  inset: 0;
  position: fixed;
  z-index: 10;
}

.target_local::before{
  content:"$";
  position: absolute;
  left: 20px;
  top: 35px;
  font-size: 16px;
  color: gray;
}
</style>