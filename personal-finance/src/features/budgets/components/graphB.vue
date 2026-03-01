<script setup>

import DoughnutChart from "@/components/DoughnutChart.vue";
import {ref} from "vue";

const labels = ref(['Jan', 'Feb', 'Mar', 'Apr', 'May'])
const values = ref([320, 450, 300, 500, 420])
</script>


<template>
  <section class="flex flex-col md:flex-row lg:flex-col lg:h-139.75 justify-between gap-8 bg-white py-6 px-5 rounded-2xl h-145.75 md:h-86 shadow-cardShadow">
    <DoughnutChart :data="values" :labels="labels" centerText="338" centerLimit="975"/>
    <div class="grid gap-6">
      <h1 class="font-bold text-[20px]">Spending Summary</h1>
      <div class="flex flex-col">
        <div class="flex justify-between items-center h-13.25 border-b border-gray-200">
          <div class="flex gap-5 h-5.25">
            <div class="border-2 h-full w-1 rounded-lg border-potgrey"></div>
            <p class="text-[14px]">Bills</p>
          </div>
          <p class="font-bold">$250.00<span class="font-normal ml-2 text-[12px] text-gray-400">of $750.00</span></p>
        </div>

        <div class="flex justify-between items-center h-13.25 border-b border-gray-200">
          <div class="flex gap-5 h-5.25">
            <div class="border-2 h-full w-1 rounded-lg border-potgrey"></div>
            <p class="text-[14px]">Dining Out</p>
          </div>
          <p class="font-bold">$250.00 <span class="font-normal ml-2 text-[12px] text-gray-400">of $750.00</span></p>
        </div>

        <div class="flex justify-between items-center h-13.25 border-b border-gray-200">
          <div class="flex gap-5 h-5.25">
            <div class="border-2 h-full w-1 rounded-lg border-potgrey"></div>
            <p class="text-[14px]">Personal Care</p>
          </div>
          <p class="font-bold">$250.00 <span class="font-normal ml-2 text-[12px] text-gray-400">of $750.00</span></p>
        </div>

        <div class="flex justify-between items-center h-13.25 border-b border-gray-200">
          <div class="flex gap-5 h-5.25">
            <div class="border-2 h-full w-1 rounded-lg border-potgrey"></div>
            <p class="text-[14px]">Entertainment</p>
          </div>
          <p class="font-bold">$250.00 <span class="font-normal ml-2 text-[12px] text-gray-400">of $750.00</span></p>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>

</style>