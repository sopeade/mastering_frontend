<script setup>
import { ref, onMounted } from 'vue';
import menuBudget from '@/features/budgets/components/editBudgetDropdown.vue';

const props = defineProps({
  budget_category:{
    type: String,
    required: false,
    default: 'Entertainment',
  },
  max_spending:{
    type: Number,
    required: false,
  },
  color:{
    type: String,
    required: false,
    default: 'bg-red-300'
  },
})

const items = ref([
  {name: 'Papa Software',
   amount: '$10.00',
   date: '16 Aug 2024',
  },

  {name: 'Quebec Services',
   amount: '$5.00',
   date: '12 Aug 2024',
  },

  {name: 'Quebec Services',
   amount: '$5.00',
   date: '12 Aug 2024',
  },
])
</script>


<template>
  <section class="grid bg-white rounded-2xl px-5 py-6 h-121.5 min-w-85.75 gap-5 shadow-cardShadow">
    <div class="flex h-6 justify-between items-center">
      <div class="flex gap-4 items-center">
        <div class="name-dot h-4 w-4 rounded-full"
        :class="`${props.color}`"></div>
        <p class="font-bold text-[20px]">{{props.budget_category}}</p>
      </div>
      <menu-budget/>
    </div>
    <div class="name-max flex flex-col gap-4">
      <p class="text-[14px]">Maximum of ${{props.max_spending}}</p>
      <div class="name-bar flex flex-col justify-center px-1 bg-peach h-8 w-full rounded-lg">
        <div :class="`${props.color} h-6 w-[75%] rounded-lg`"></div>
      </div>
      <div class="flex">
        <div class="flex gap-5 h-10.75 basis-1/2">
          <div class="border-2 h-full w-1 rounded-lg border-potgrey"></div>
          <p class="grid text-[14px]">
            Spent
            <span class="font-bold">$25</span>
          </p>
        </div>
        <div class="flex gap-5 h-10.75 basis-1/2">
          <div class="border-2 h-full w-1 rounded-lg border-potgrey"></div>
          <p class="grid text-[14px]">
            Remaining
            <span class="font-bold">$25</span>
          </p>
        </div>
      </div>
    </div>
    <div class="name-spending bg-peach rounded-2xl p-4">
      <div class="flex justify-between">
        <h1 class="font-bold">Latest Spending</h1>
        <div class="flex gap-3 items-center">
          <p>See All</p>
          <img class="w-3 h-3" src="@/assets/images/icon-caret-right.svg" alt="">
        </div>
      </div>
      <article class="border-b border-gray-200 h-16"
                :class="{'border-b-0': items.length - 1 === idx}"
                v-for="(item, idx) in items" :key="item.id" >
         <div class="flex justify-between items-center h-full">

           <p class="text-[12px] font-bold">{{item.name}}</p>
           <div class="text-[12px]">
             <p class="font-bold ">{{item.amount}}</p>
             <p class="">{{item.date}}</p>
           </div>
         </div>
      </article>
    </div>
  </section>

</template>


<style scoped>

</style>
