<script setup>
import { ref, onMounted } from 'vue';
import menuBudget from '@/features/budgets/components/editBudgetDropdown.vue';

const props = defineProps({
  id:{
    type: Number,
    required: true,
  },
  category:{
    type: String,
    required: true
  },
  max:{
    type: Number,
    required: false,
  },
  spent:{
    type: Number,
    required: false,
    default: 0
  },
  remaining:{
    type: Number,
    required: false,
    default: 0,
  },
  color:{
    type: String,
    required: false,
    default: 'bg-red-300'
  },
  items: {
    type: Array,
    required: false,
  }
})
    // default: () => {[
    //   {name: 'Papa Software',
    //     amount: '$10.00',
    //     date: '16 Aug 2024',
    //   },
    //   {name: 'Quebec Services',
    //     amount: '$5.00',
    //     date: '12 Aug 2024',
    //   },
    //   {name: 'Quebec Services',
    //     amount: '$5.00',
    //     date: '12 Aug 2024',
    //   }
    // ]}

// const items = ref([
//   {name: 'Papa Software',
//    amount: '$10.00',
//    date: '16 Aug 2024',
//   },
//   {name: 'Quebec Services',
//    amount: '$5.00',
//    date: '12 Aug 2024',
//   },
//   {name: 'Quebec Services',
//    amount: '$5.00',
//    date: '12 Aug 2024',
//   },
// ])
</script>


<template>
  <section class="flex flex-col bg-white rounded-2xl px-5 py-6 h-121.5 min-w-85.75 gap-5 shadow-cardShadow">
    <div class="flex h-6 justify-between items-center">
      <div class="flex gap-4 items-center">
        <div class="name-dot h-4 w-4 rounded-full"
        :class="`${props.color}`"></div>
        <p class="font-bold text-[20px]">{{props.category}}</p>
      </div>
      <menu-budget :id="props.id"/>
    </div>
    <div class="name-max flex flex-col gap-4">
      <p class="text-[14px]">Maximum of ${{props.max}}</p>
      <div class="name-bar flex flex-col justify-center px-1 bg-peach h-8 w-full rounded-lg">
        <transition name="grow" appear>
          <div :class="`${props.color} h-6 w-[75%] rounded-lg`"></div>
        </transition>
      </div>
      <div class="flex">
        <div class="flex gap-5 h-10.75 basis-1/2">
          <div class="border-2 h-full w-1 rounded-lg border-potgrey"></div>
          <p class="grid text-[14px]">
            Spent
            <span class="font-bold">${{props.spent}}</span>
          </p>
        </div>
        <div class="flex gap-5 h-10.75 basis-1/2">
          <div class="border-2 h-full w-1 rounded-lg border-potgrey"></div>
          <p class="grid text-[14px]">
            Remaining
            <span class="font-bold">${{props.remaining}}</span>
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
                :class="{'border-b-0': props.items.length - 1 === idx}"
                v-for="(item, idx) in props.items.slice(0, 3)" :key="item.id" >
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
