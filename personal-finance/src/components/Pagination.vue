<script setup>
import {computed, onUpdated} from 'vue';
// https://www.digitalocean.com/community/tutorials/vuejs-vue-pagination-component
const props = defineProps({
  maxVisibleButtons: {
    type: Number,
    required: false,
    default: 5
  },
  totalPages: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  }
})

const isPageActive = (page) => {return props.currentPage === page};
const startPage = computed(() => {
  //First Page
  if (props.currentPage === 1){
    return 1;
  }
  //Last Page.
  if (props.currentPage >= props.totalPages - Math.floor(props.maxVisibleButtons/2) &&
      props.currentPage > props.maxVisibleButtons){
    return props.totalPages - props.maxVisibleButtons + 1;
  }
  //Any Middle Page
  return Math.max(Math.max(props.currentPage - Math.floor(props.maxVisibleButtons/2)), 1);
});

const endPage = computed(() => {
  return Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages);
});

const pages = computed(() => {
  const range = [];
  let i = startPage.value;
  for (i; i <= endPage.value; i++){
    range.push({
      number: i,
      isDisabled: i === props.currentPage
    });
  }
  return range;
});

const isInFirstPage = computed(() => {
  return props.currentPage === 1;
});

const isInLastPage = computed(() => {
  return props.currentPage === props.totalPages;
});

const emit = defineEmits(['pageChanged'])
const onClickFirstPage    = () => { emit('pageChanged', 1)}
const onClickPreviousPage = () => {emit('pageChanged', props.currentPage - 1)}
const onClickPage         = (page) => {emit('pageChanged', page)}
const onClickNextPage     = () => { emit('pageChanged', props.currentPage + 1)}
const onClickLastPage     = () => { emit('pageChanged', props.totalPages)}

onUpdated(() => {
  if (isInLastPage.value){
    console.log("isInLastPage", isInLastPage.value)
  }
})

</script>

<template>
  <ul class="flex justify-between">
    <li class="flex gap-4"
      :style="{visibility: isInFirstPage ? 'hidden' : 'visible'}">
      <div class="hidden">
        <button
          type="button"
          @click="onClickFirstPage"
        >
  <!--        :disabled="isInFirstPage"-->
          <img src="@/assets/images/icon-caret-left.svg" alt="">
          <span class="">
            First
          </span>
        </button>
      </div>

      <div class="flex border border-gray-400 rounded-lg">
        <button
            class="flex w-12 h-10 gap-4 md:w-23.25 justify-center hover:bg-[#98908b]"
            type="button"
            @click="onClickPreviousPage"
            :disabled="isInFirstPage"
        >
          <img class="w-4 h-4 self-center" src="@/assets/images/icon-caret-left.svg" alt="">
          <span class="self-center hidden md:inline">
           Prev
          </span>

        </button>
      </div>
    </li>
    <!-- Visible Buttons Start -->
    <li class="flex gap-2 h-10">
      <div class="flex w-10 h-full rounded-xl"
           v-for="page in pages">
        <button
          @click="onClickPage(page.number)"
          class="w-full border border-gray-400 rounded-lg mx-auto hover:bg-[#98908b]"
          :class="{ active: isPageActive(page.number) }"
          :disabled="page.isDisabled"
          type="button"
        >
          {{ page.number }}
        </button>
      </div>
    </li>
    <!-- Visible Buttons End -->
    <li class="flex gap-4"
        :style="{visibility: isInLastPage ? 'hidden' : 'visible'}">
      <div class="flex border border-gray-400 rounded-lg">
        <button
          class="flex w-12 h-10 gap-4 md:w-23.25 justify-center hover:bg-[#98908b]"
          type="button"
          @click="onClickNextPage"
          :disabled="isInLastPage"
        >
          <span class="self-center hidden md:inline">
            Next
          </span>
          <img class="w-4 h-4 self-center" src="@/assets/images/icon-caret-right.svg" alt="">
        </button>
      </div>

      <div class="hidden">
      <button
        type="button"
        @click="onClickLastPage"
        :disabled="isInLastPage"
      >
        Last
      </button>
    </div>
    </li>
  </ul>
</template>

<style scoped>

.active {
  background-color: black;
  color: white;
}

</style>

