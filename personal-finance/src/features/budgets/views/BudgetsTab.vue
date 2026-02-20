<script setup>
import { ref } from 'vue';
import GraphB from "@/features/budgets/components/graphB.vue";
import BudgetCard from "@/features/budgets/components/budgetCard.vue";
// import billsCard from "@/features/budgets/components/billsB.vue";




</script>

<template>
  <div class="flex justify-between">
    <h1>Budgets</h1>
    <button class="bg-black rounded-lg text-white">
      <i class="material-icons">add</i>
      <span>Add New Budget</span>
    </button>
  </div>
  <div class="flex flex-col lg:flex-row gap-6">
    <div class="flex-2">
      <graph-b :budget_category="music" :max_spending="0" :color="blue-300"/>
    </div>
    <div class="grid flex-3 gap-6">
      <budget-card :max_spending="50"/>
      <budget-card/>
      <budget-card/>
      <budget-card/>
    </div>
  </div>
</template>


<style scoped>

</style>