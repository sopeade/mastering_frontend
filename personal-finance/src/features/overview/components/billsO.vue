<script setup>
import { useOverviewStore } from "@/features/overview/store/useOverviewStore.ts";
import { storeToRefs } from "pinia";

const store = useOverviewStore();
const { activeTab } = storeToRefs(store);

const props = defineProps({
  data: {
    type: Object,
    required: false,
  }
})
</script>

<template>

  <section class="grid gap-8 bg-white rounded-2xl px-5 py-6
    lg:row-start-15 lg:row-span-9 lg:h-full lg:col-start-8 lg:col-span-full shadow-cardShadow">
    <div class="flex justify-between">
      <h1 class="font-bold text-[20px]">Recurring Bills</h1>
      <p class="flex gap-3 cursor-pointer">
        <button @click="activeTab='recurring-bills'"
          class="self-start">
          See Details
        </button>
        <span class="flex h-6">
          <img class="h-3 self-center" src="@/assets/images/icon-caret-right.svg" alt="">
        </span>
      </p>
    </div>
    <div class="grid gap-3 *:rounded-lg">
      <div class="flex justify-between bg-peach h-15.25 px-4 py-4 shadow-[inset_4px_0px_0px_hsl(120_70_40)]">
        <p>Paid Bills</p>
        <p>$190.00</p>
      </div>
      <div class="flex justify-between bg-peach h-15.25 px-4 py-4 shadow-[inset_4px_0px_0px_hsl(120_70_40)]">
        <p>Total Upcoming</p>
        <p>$194.98</p>
      </div>
      <div class="flex justify-between bg-peach h-15.25 px-4 py-4 shadow-[inset_4px_0px_0px_hsl(120_70_40)]">
        <p>Due Soon</p>
        <p>$59.98</p>
      </div>
    </div>
  </section>
</template>


<style scoped>
</style>
