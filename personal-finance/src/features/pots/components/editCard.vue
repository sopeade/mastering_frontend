<script setup>
import {ref, onMounted, onUnmounted, onUpdated} from "vue";
import Dropdown from "@/components/dropdown.vue";
import {putData} from "@/utils/helpers.ts";
import {usePotsStore} from "@/features/pots/store/usePotsStore.ts";
import {storeToRefs} from "pinia";

console.log("----editCard")
const store = usePotsStore();
const { pots } = storeToRefs(store);
const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})
const emit = defineEmits(['closeModal'])
const closeModal = () => {
  emit('closeModal')
}
console.log("pots.value", pots.value)
const idx = pots.value.findIndex(p => p.id === Number(props.id));
const originalCard = pots.value[idx];
const card = ref({
  id: originalCard["id"],
  name: originalCard["name"],
  target: originalCard["target"],
  saved: originalCard["saved"],
  color: originalCard["color"],
})


const showModal = ref(true);

console.log("card", card.value)
const potsUrl = import.meta.env.VITE_API_POTS_URL
const save = async() => {
  try{
    await putData(potsUrl, props.id, card.value)
    pots.value[idx] = card.value
    closeModal();
  }
  catch (err){
    console.error("save failed:", err)
  }
}

const isMdUp = ref(false);
const widthSmall = '295px'
const widthMid = '496px'
const arr = ['a', 'b', 'c']
let mediaQuery
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
          <input v-model="card.name" class=" border w-full border-gray-400 pl-3 rounded-lg h-11.25" type="text">
        </div>
        <div class="relative">
          <span>Target</span>
          <div class="target_local">
            <input v-model="card.target" class=" border w-full border-gray-400 pl-6 rounded-lg h-11.25" type="number">
          </div>

        </div>
        <div class="">
          <span>Theme</span>
          <dropdown :items="arr" :select-width="isMdUp ? widthMid : widthSmall" @updatedOption="val => card.color=val"
                    select-focus-border="1px solid #696868" options-gap="3rem" id="budget"/>
        </div>
      </div>
      <button @click="save" class="bg-black text-white rounded-lg h-13.25">Save Changes</button>
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
  left: 10px;
  top: 35px;
  font-size: 16px;
  color: gray;
}
</style>