<script setup>
import { useBudgetsStore } from "@/features/budgets/store/useBudgetsStore.ts";
import DoughnutChart from "@/components/DoughnutChart.vue";


const store = useBudgetsStore();
const { aggregateBudget } = store;
const labels = Object.keys(aggregateBudget.value['budgetSum'])
const budgetValues = Object.values(aggregateBudget.value['budgetSum'])

// console.log("aggregateBudget", aggregateBudget.value)
// console.log("keys", Object.keys(aggregateBudget.value['budgetSum']))
// console.log("keys", Object.values(aggregateBudget.value['budgetSum']))
</script>


<template>
  <section class="flex flex-col md:flex-row lg:flex-col lg:h-139.75 justify-between gap-8 bg-white py-6 px-5 rounded-2xl h-145.75 md:h-86 shadow-cardShadow">
    <DoughnutChart :data="budgetValues" :labels="labels" :centerText="`${aggregateBudget.totalSpent}`" :centerLimit="`${aggregateBudget.maxLimit}`"/>
    <div class="grid gap-6">
      <h1 class="font-bold text-[20px]">Spending Summary</h1>
      <div class="flex flex-col">
        <div class="flex justify-between items-center h-13.25 border-b border-gray-200">
          <div class="flex gap-5 h-5.25">
            <div class="border-2 h-full w-1 rounded-lg border-potgrey"></div>
            <p class="text-[14px]">Bills</p>
          </div>
          <p class="font-bold">${{ aggregateBudget.budgetSum['Bills'] }}<span class="font-normal ml-2 text-[12px] text-gray-400">of ${{aggregateBudget.categoryMax['Bills'] }}</span></p>
        </div>

        <div class="flex justify-between items-center h-13.25 border-b border-gray-200">
          <div class="flex gap-5 h-5.25">
            <div class="border-2 h-full w-1 rounded-lg border-potgrey"></div>
            <p class="text-[14px]">Dining Out</p>
          </div>
          <p class="font-bold">${{ aggregateBudget.budgetSum['Dining Out'] }} <span class="font-normal ml-2 text-[12px] text-gray-400">of ${{ aggregateBudget.categoryMax['Dining Out'] }}</span></p>
        </div>

        <div class="flex justify-between items-center h-13.25 border-b border-gray-200">
          <div class="flex gap-5 h-5.25">
            <div class="border-2 h-full w-1 rounded-lg border-potgrey"></div>
            <p class="text-[14px]">Personal Care</p>
          </div>
          <p class="font-bold">${{ aggregateBudget.budgetSum['Personal Care'] }} <span class="font-normal ml-2 text-[12px] text-gray-400">of ${{ aggregateBudget.categoryMax['Personal Care'] }}</span></p>
        </div>

        <div class="flex justify-between items-center h-13.25 border-b border-gray-200">
          <div class="flex gap-5 h-5.25">
            <div class="border-2 h-full w-1 rounded-lg border-potgrey"></div>
            <p class="text-[14px]">Entertainment</p>
          </div>
          <p class="font-bold">${{ aggregateBudget.budgetSum['Entertainment'] }} <span class="font-normal ml-2 text-[12px] text-gray-400">of ${{ aggregateBudget.categoryMax['Entertainment'] }}</span></p>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>

</style>