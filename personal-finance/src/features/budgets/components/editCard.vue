<script setup>
import {ref, onMounted, onUnmounted, onUpdated} from "vue";
import Dropdown from "@/components/dropdown.vue";
import { useBudgetsStore } from "@/features/budgets/store/useBudgetsStore.ts";
import {storeToRefs} from "pinia";
import {putData} from "@/utils/helpers.ts";

console.log("----editCard")
const store = useBudgetsStore();
const { budgets } = storeToRefs(store);
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

const idx = budgets.value.findIndex(p => p.id === Number(props.id));
const originalCard= budgets.value[idx];
const card = ref({
  id: originalCard["id"],
  category: originalCard["category"],
  max: originalCard["max"],
  spent: originalCard["spent"],
  remaining: originalCard["remaining"],
  color: originalCard["color"],
  items: originalCard["items"],
})


const budgetsUrl = import.meta.env.VITE_API_BUDGETS_URL
const save = async() => {
  try{
    await putData(budgetsUrl, props.id, card.value)
    budgets.value[idx] = card.value
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
const showModal = ref(true);
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
        <p class="text-[20px] md:text-[32px] font-bold">Edit Budget</p>
        <button @click="closeModal">
          <img src="@/assets/images/icon-close-modal.svg" alt="close">
        </button>
      </div>
      <p class="">As your budgets change, feel free to update your spending limits.</p>
      <div class="flex flex-col justify-between h-58.25">
        <div class="">
          <span>Budget Category</span>
          <dropdown :items="arr" :select-width="isMdUp ? widthMid : widthSmall" @updatedOption="val => card.category=val"
                    options-gap="3rem" id="budget"/>
        </div>
        <div class="relative">
          <span>Maximum Spend</span>
          <div class="target_local">
            <input v-model="card.max" class=" w-full border pl-6 border-[#696868] hover:border-black rounded-lg h-11.25" type="number">
          </div>
        </div>
        <div class="">
          <span>Theme</span>
          <dropdown :items="arr" :select-width="isMdUp ? widthMid : widthSmall" @updatedOption="val => card.color=val"
                    options-gap="3rem" id="budget"/>
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