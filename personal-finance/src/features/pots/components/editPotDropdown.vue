<script setup>
import {ref, onMounted, onBeforeUnmount} from "vue";
import editCard from "@/features/pots/components/editCard.vue";
import deleteCard from "@/features/pots/components/deleteCard.vue";

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
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
const showCard = ref(false);
const isEditing = ref(false);
const isDeleting = ref(false);
const dropdownRef = ref(null);
const popUpRef = ref(null);

const handleClickOutside = (event) => {
  if (popUpRef.value && (isDeleting || isEditing)){
  }
  else {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
      showCard.value = false;
    }
  }
}
onMounted(()=> {
  document.addEventListener("click", handleClickOutside);
})
onBeforeUnmount(()=> {
  document.removeEventListener("click", handleClickOutside);
})

</script>

<template>
  <div class="relative" ref="dropdownRef">
    <button class="border-4 bg-green" @click="showCard=!showCard" aria-label="Open Card">
      <img class="h-4 w-4 -z-10" src="@/assets/images/icon-ellipsis.svg" alt="Ellipsis">
    </button>
    <div
      v-if="showCard"
      class="bg-white w-33.5 h-22.75  p-3 border border-gray-300
      absolute top-7 right-0 rounded-lg grid justify-center">
      <div
        @click="isEditing=true"
        class="text-sm h-5.25 cursor-pointer">
          Edit Pot
      </div>
      <div class="h-px w-full bg-gray-100"></div>
      <div
        @click="isDeleting=true"
        class="text-sm h-5.25 cursor-pointer">
          Delete Pot
      </div>
    </div>
  </div>
  <edit-card v-if="isEditing" :id="props.id" @close-modal="isEditing=false;showCard=false" ref="popUpRef"/>
  <delete-card v-if="isDeleting" :id="props.id" @close-modal="isDeleting=false" ref="popUpRef"/>
</template>


<style lang="scss" scoped>

</style>