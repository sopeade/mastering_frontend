<script setup>
import {ref, onMounted, onUnmounted, onUpdated} from "vue";
import Dropdown from "@/components/dropdown.vue";

const emit = defineEmits(['closeModal'])
const showModal = ref(true);
const closeModal = () => {
  emit('closeModal')
}


</script>

<template>
<div class="overlay flex justify-center items-center" @click.self="closeModal">
    <div :class="`bg-white w-83.75 md:w-140 h-69.5 rounded-lg py-6 px-5 md:p-8 grid gap-5`">
      <div class="flex justify-between h-8 md:9.5">
        <p class="text-[20px] self-center md:text-[32px] font-bold">Delete 'Entertainment'?</p>
        <button @click="closeModal">
          <img src="@/assets/images/icon-close-modal.svg" alt="close">
        </button>
      </div>
      <p class="text-gray-500 text-sm h-15.75 md:h-10.5">Are you sure you want to delete this budget? This action cannot be reversed,
        and all the data inside it will be removed forever.</p>
      <button
          @click=""
          class="bg-[#d46c5e] text-white text-sm rounded-lg h-13.25">
            Yes, Confirm Deletion
      </button>
      <button
          @click=""
          class="text-gray-500 rounded-lg text-sm h-5.25">
            No, Go back
      </button>
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
</style>