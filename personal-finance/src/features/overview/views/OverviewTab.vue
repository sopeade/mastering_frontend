<script setup>
  import {ref, onUnmounted, onBeforeMount, onMounted, computed} from 'vue';
  import numbersO from "@/features/overview/components/numbersO.vue";
  import potsO from "@/features/overview/components/potsO.vue";
  import transactionsO from "@/features/overview/components/transactionsO.vue";
  import budgetsO from "@/features/overview/components/budgetsO.vue";
  import billsO from "@/features/overview/components/billsO.vue";
  import { useOverviewStore } from "@/features/overview/store/useOverviewStore.ts";
  import {storeToRefs} from "pinia";

  const overviewStore = useOverviewStore();
  const { potsSummary } = storeToRefs(overviewStore)
  const { getPots, getBudgets, getTransactions } = overviewStore;

  console.log("potsSummary", potsSummary.value);

  onMounted(async () => {
  // onBeforeMount(async () => {
    console.log("Overview Tab Mounted")
    // await getPots();
    // await getBudgets();
    // await getTransactions();
  })

  onUnmounted(() => {
    console.log("Overview Tab UnMounted")
  })

</script>

<template>
  <div class="flex flex-col gap-8 pt-6 lg:grid md:gap-4 mb-8 grid-rows-24 grid-cols-12 overflow-auto">
    <h1 class="row-start-1 row-span-2 w-full font-bold text-[32px] justify-start">Overview</h1>
    <numbers-o/>
    <pots-o/>
    <transactions-o/>
    <budgets-o/>
    <bills-o/>
  </div>

</template>


<style scoped>

</style>