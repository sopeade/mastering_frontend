<script setup>
  import { ref } from 'vue';
  import DoughnutChart from "@/components/DoughnutChart.vue";
  import coloredItems from "@/features/overview/components/coloredItems.vue"

  const labels = ref(['Jan', 'Feb', 'Mar', 'Apr', 'May'])
  const values = ref([320, 450, 300, 500, 420])

  // Example: update data dynamically
  setTimeout(() => {
    values.value = [400, 380, 520, 460, 610]
  }, 3000)
</script>

<template>
  <section class="lg:grid bg-white rounded-2xl px-5 py-6 overflow-auto
  lg:row-start-6 lg:row-span-9 lg:h-full lg:col-start-8 lg:col-span-full shadow-cardShadow">
    <div class="flex justify-between">
      <h1 class="font-bold text-[20px]">Budgets</h1>
      <p class="flex gap-3 cursor-pointer">
        <span>
          See Details
        </span>
        <span class="flex h-6">
          <img class="h-3 self-center" src="@/assets/images/icon-caret-right.svg" alt="">
        </span>
      </p>
    </div>
    <div class="flex flex-col md:flex-row md:justify-between">
      <DoughnutChart :data="values" :labels="labels" centerText="338" centerLimit="975"/>
<!--      <div>hello</div>-->
      <colored-items :vertical=true>
        <template #item1>Entertainment</template>
        <template #sum1>$50.00</template>
        <template #item2>Bills</template>
        <template #sum2>$750.00</template>
        <template #item3>Dining Out</template>
        <template #sum3>$75.00</template>
        <template #item4>Personal Care</template>
        <template #sum4>$100.00</template>
      </colored-items>

    </div>

  </section>
</template>


<style scoped>
</style>
