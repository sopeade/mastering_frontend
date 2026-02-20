<script setup>
  import { ref } from 'vue';
  import numbersO from "@/features/overview/components/numbersO.vue";
  import potsO from "@/features/overview/components/potsO.vue";
  import transactionsO from "@/features/overview/components/transactionsO.vue";
  import budgetsO from "@/features/overview/components/budgetsO.vue";
  import billsO from "@/features/overview/components/billsO.vue";
  import BarChart from "@/components/BarChart.vue"
  import DoughnutChart from "@/components/DoughnutChart.vue";


</script>

<template>

<!--  <div class=" flex flex-col gap-8 md:gap-6 border h-screen border-red-500">-->
<!--    &lt;!&ndash;  <div class=" flex flex-col gap-8 md:gap-6 border h-screen border-red-500">&ndash;&gt;-->
<!--    &lt;!&ndash;    <h1 class="row-start-1 font-bold text-[32px] border">Overview</h1>&ndash;&gt;-->
<!--    &lt;!&ndash;    <numbers-o/>&ndash;&gt;-->
<!--    &lt;!&ndash;    <section class="grid gap-6 grid-cols-12 grid-rows-10 border h-100">&ndash;&gt;-->
<!--    <section class="grid gap-2 grid-cols-12 grid-rows-12 border h-full">-->
<!--      &lt;!&ndash;      <div class="row-start-1 row-end-2 h-full">hello</div>&ndash;&gt;-->
<!--      <pots-o/>-->
<!--      &lt;!&ndash;      <transactions-o/>&ndash;&gt;-->
<!--      &lt;!&ndash;      <budgets-o/>&ndash;&gt;-->
<!--    </section>-->
<!--  </div>-->

  <div class="flex flex-col gap-8 lg:grid md:gap-4 mb-8 grid-rows-24 grid-cols-12 overflow-auto">
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


<!--<section class="grid gap-6 grid-cols-12 grid-rows-10 border h-full">-->
<!--  <div class="row-start-1 row-end-2 h-full">hello</div>-->
<!--</section>-->
