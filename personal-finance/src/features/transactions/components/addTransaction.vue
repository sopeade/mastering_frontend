<script setup>
import {ref, onMounted, onUnmounted, onUpdated} from "vue";
import Dropdown from "@/components/dropdown.vue";
import { useTransactionStore } from "@/features/transactions/store/useTransactionStore.ts";
import { storeToRefs } from "pinia";
import {postData} from "@/utils/helpers.ts";

const store = useTransactionStore();
const { transactions } = storeToRefs(store);
const emit = defineEmits(['closeModal'])
const closeModal = () => {
  emit('closeModal')
}

const newTransaction = ref({
  id: 0,
  name: "",
  category: "",
  amount: 0,
  date: "",
})

const transactionUrl = import.meta.env.VITE_API_TRANSACTIONS_URL
const addingTransaction = async() => {
  try{
    await postData(transactionUrl,  newTransaction.value);
    transactions.value.push(newTransaction.value);
    closeModal();
  }
  catch(err){}
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
  console.log("newBudget", newTransaction.value)
})
</script>

<template>
<div class="overlay flex justify-center items-center" @click.self="closeModal">
    <div :class="`grid bg-white w-83.75 md:w-140 h-135 rounded-lg py-6 px-5 md:p-8 justify-between`">
      <div class="flex justify-between h-1/2">
        <p class="text-[20px] md:text-[32px] font-bold self-center">Add New Transaction</p>
        <button @click="closeModal" class="">
          <img src="@/assets/images/icon-close-modal.svg" alt="close">
        </button>
      </div>

      <p class="text-gray-500 text-sm self-start">Create a new transaction to track your income and spending</p>
      <div class="flex flex-col justify-between h-58.25">
        <div class="relative">
          <span class="text-gray-500 font-bold text-xs">Transaction Name</span>
          <div class="">
            <input v-model="newTransaction.name" class="w-full border-[#9ca3af] pl-5 hover:border-black rounded-lg h-11.25" placeholder="e.g. Fast Gas" type="text">
          </div>
        </div>
        <div class="">
          <span class="text-gray-500 font-bold text-xs">Category</span>
          <dropdown :items="arr" :select-width="isMdUp ? widthMid : widthSmall" @updatedOption="val => newTransaction.category=val"
                    select-border="1px solid #9ca3af" options-gap="3rem" id="budget"/>
        </div>
        <div class="relative">
          <span class="text-gray-500 font-bold text-xs">Amount</span>
          <div class="target_local">
            <input v-model="newTransaction.amount" class="w-full border border-[#9ca3af] pl-9 hover:border-black rounded-lg h-11.25" type="number">
          </div>
        </div>
        <div class="relative">
          <span class="text-gray-500 font-bold text-xs">Transaction Date</span>
          <div class="">
            <input v-model="newTransaction.date" class="w-full border border-[#9ca3af] pl-5 hover:border-black rounded-lg h-11.25" type="date">
          </div>
        </div>
      </div>
      <button @click="addingTransaction" class="bg-black text-white rounded-lg h-13.25 font-bold text-sm self-end">Add Transaction</button>
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