<script setup>
import { ref } from 'vue';
import GraphB from "@/features/budgets/components/graphB.vue";
import BudgetCard from "@/features/budgets/components/budgetCard.vue";
// import billsCard from "@/features/budgets/components/billsB.vue";




</script>

<template>
  <div class="grid gap-8 pt-6">
    <div class="name-header flex justify-between h-11.25">
      <h1 class="text-[32px] font-bold">Budgets</h1>
      <button class="flex items-center px-4 bg-black rounded-lg text-white">
        <i class="material-icons scale-80">add</i>
        <span>Add New Budget</span>
      </button>
    </div>
    <div class="flex flex-col lg:flex-row gap-6">
      <div class="flex-2">
        <graph-b/>
      </div>
      <div class="grid flex-3 gap-6">
        <budget-card budget_category="music" :max_spending="0" color="bg-blue-300"/>
        <budget-card budget_category="music" :max_spending="0" color="bg-blue-300"/>
        <budget-card budget_category="music" :max_spending="0" color="bg-blue-300"/>
        <budget-card budget_category="music" :max_spending="0" color="bg-blue-300"/>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>