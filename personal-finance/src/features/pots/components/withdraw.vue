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
const count = ref(0);
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
    <div :class="`bg-white w-83.75 md:w-140 h-119.5 rounded-lg py-6 px-5 md:p-8 grid gap-5`">
      <div class="flex justify-between h-8">
        <p class="text-[20px] md:text-[32px] font-bold">Withdraw from 'Savings'</p>
        <button @click="closeModal">
          <img src="@/assets/images/icon-close-modal.svg" alt="close">
        </button>
      </div>
      <p class="max-h-21 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid animi cumque hic necessitatibus, repellat repudiandae sed!</p>
      <div class="flex flex-col justify-between h-28.5">
        <div class="grid h-22.25 gap-4">
          <p class="flex justify-between items-center h-9.5">
            <span class="text-sm">New Amount</span>
            <span class="text-[32px] font-bold">$559.00</span>
          </p>
          <div class="flex flex-col justify-between h-9.75">
            <div class="h-2 rounded-lg bg-peach">
              <transition name="grow" appear>
                <div class="h-2 rounded-lg bg-black w-[20%]"></div>
              </transition>
            </div>
            <p class="flex justify-between text-[12px] h-4.5">
              <span>27.95%</span>
              <span>Target of $2,000</span>
            </p>
          </div>
        </div>
      </div>

      <div class="target_local relative h-16.75 grid">
        <span>Amount to Withdraw</span>
        <input class="pot_name_local  border border-[#696868] pl-10 h-11.25 cursor-pointer hover:border hover:border-black rounded-lg" type="text">
      </div>
      <button class="bg-black text-white rounded-lg h-13.25">Confirm Withdrawal</button>
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

.grow-enter-from{
  width: 0;
  opacity: 0;
}

.grow-leave-to {
  width: 100%;
  opacity: 1;
}
.grow-enter-active,
.grow-leave-active {
  transition: all 0.8s ease;
}

</style>
<!--  background-image: url('src/assets/images/icon-search.svg');-->
<!--  //background-repeat: no-repeat;-->
<!--  //background-position: left 20px center;-->
<!--  //padding: 10px 20px;-->
<!--//.fade-leave-to {-->
<!--//  width: 100%;-->
<!--//}-->
