<script setup>
import {onUpdated, ref, onMounted, onUnmounted} from 'vue';
import GraphB from "@/features/budgets/components/graphB.vue";
import BudgetCard from "@/features/budgets/components/budgetCard.vue";
import AddBudget from "@/features/budgets/components/addBudget.vue";

import { useBudgetsStore } from "@/features/budgets/store/useBudgetsStore.ts";
import { storeToRefs } from "pinia";

const store = useBudgetsStore();
const { budgets } = storeToRefs(store);

// console.log("Budgets data smtime during/before fetch: ", budgets.value)
onMounted(async () => {
  console.log("budgets tab mounted")
  await store.getBudgets();
  console.log("Budgetsdata after fetch: ", budgets.value)
})
const isAddBudget = ref(false);

const showAddBudget = () => {
  console.log("showAddBudget")
  isAddBudget.value = true
}
onUnmounted(() => {
  console.log("Budgets Tab Unmounted")
})
</script>

<template>
  <section class="grid gap-8 pt-6">
    <div class="name-header flex justify-between h-11.25">
      <h1 class="text-[32px] font-bold">Budgets</h1>
      <button @click="showAddBudget" class="flex items-center px-4 cursor-pointer hover:bg-[#696868] bg-black rounded-lg gap-2 text-white">
        <i class="material-icons scale-80">add</i>
        <span>Add New Budget</span>
      </button>
    </div>
    <div class="flex flex-col lg:flex-row gap-6">
      <div class="flex-2">
        <graph-b/>
      </div>
      <div class="grid flex-3 gap-6">
        <budget-card
            v-for="(budget, idx) in budgets" :key="budget.idx"
            :category="budget.category" :max="budget.max" :items="budget.items"
            :spent="budget.spent" :remaining="budget.remaining" color="bg-blue-300"/>

<!--        <budget-card budget_category="music" :max_spending="0" color="bg-blue-300"/>-->
      </div>
    </div>
  </section>
  <add-budget v-if="isAddBudget" @close-modal="isAddBudget=false"/>
</template>


<style scoped>

</style>