<script setup>
import {ref, onMounted, onUnmounted, onUpdated} from "vue";
import Dropdown from "@/components/dropdown.vue";
import { useBudgetsStore } from "@/features/budgets/store/useBudgetsStore.ts";
import { storeToRefs } from "pinia";
import {postData} from "@/utils/helpers.ts";

const store = useBudgetsStore();
const { budgets } = storeToRefs(store);
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

const newBudget = ref({
  id: 10,
  category: "",
  max: null,
  spent: 0,
  remaining: 0,
  color: "",
  items: []
})

const budgetUrl = import.meta.env.VITE_API_BUDGETS_URL
const addingBudget = async() => {
  try{
    await postData(budgetUrl,  newBudget.value);
    budgets.value.push(newBudget.value);
    closeModal();
  }
  catch(err){}
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
  console.log("newBudget", newBudget.value)
})
</script>

<template>
<div class="overlay flex justify-center items-center" @click.self="closeModal">
    <div :class="`bg-white w-83.75 md:w-140 h-127.5 md:h-122.5 rounded-lg py-6 px-5 md:p-8 grid gap-5`">
      <div class="flex justify-between h-9.5">
        <p class="text-[20px] md:text-[32px] font-bold">Add New Budget</p>
        <button @click="closeModal">
          <img src="@/assets/images/icon-close-modal.svg" alt="close">
        </button>
      </div>
      <p class="text-gray-500 text-sm">Choose a category to set a spending budget. These categories can help you
      monitor spending.</p>
      <div class="flex flex-col justify-between h-58.25">
        <div class="">
          <span class="text-gray-500 font-bold text-xs">Budget Category</span>
          <dropdown :items="arr" :select-width="isMdUp ? widthMid : widthSmall" @updatedOption="val => newBudget.category=val"
                    select-border="1px solid #9ca3af" options-gap="3rem" id="budget"/>
        </div>
        <div class="relative">
          <span class="text-gray-500 font-bold text-xs">Maximum Spending</span>
          <div class="target_local">
            <input v-model="newBudget.max" class="w-full border border-[#9ca3af] pl-9 hover:border-black rounded-lg h-11.25" type="number">
          </div>
        </div>
        <div class="relative">
          <span class="text-gray-500 font-bold text-xs">Theme</span>
          <dropdown :items="arr" :select-width="isMdUp ? widthMid : widthSmall" @updatedOption="val => newBudget.color=val"
                    select-border="1px solid #9ca3af" options-gap="3rem" id="budget"/>
        </div>
      </div>
      <button @click="addingBudget" class="bg-black text-white rounded-lg h-13.25 font-bold text-sm">Add Budget</button>
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