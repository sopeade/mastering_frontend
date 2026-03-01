<script setup>
  import coloredItems from "@/features/overview/components/coloredItems.vue"
</script>

<template>
  <section class="grid bg-white rounded-2xl *:rounded-lg px-5 py-5
  lg:row-start-6 lg:row-span-5 lg:col-start-1 lg:col-end-8 shadow-cardShadow">
    <!--Pots-->
    <div class="grid gap-2">
      <div class="flex justify-between">
        <h1 class="font-bold text-[20px]">Pots</h1>
        <p class="flex gap-3 cursor-pointer">
          <span>
            See Details
          </span>
          <span class="flex h-6">
            <img class="h-3 self-center" src="@/assets/images/icon-caret-right.svg" alt="">
          </span>
        </p>
      </div>
      <div class="flex flex-col md:flex-row gap-5 lg:max-h-27.5">
        <div class="flex gap-4 items-center md:min-w-55.75 xl:min-w-63.5 py-5 rounded-lg bg-peach ">
          <img class="h-10 w-10 ml-4" src="@/assets/images/icon-pot.svg" alt="">
          <div class="grid gap-3">
            <p class="text-[14px]">Total Saved</p>
            <h1 class="text-[32px] font-bold">$850</h1>
          </div>
        </div>
        <colored-items>
          <template #item1>Savings</template>
          <template #sum1>$159</template>
          <template #item2>Gift</template>
          <template #sum2>$40</template>
          <template #item3>Concert Ticket</template>
          <template #sum3>$110</template>
          <template #item4>New Laptop</template>
          <template #sum4>$10</template>
        </colored-items>
      </div>
    </div>
  </section>

</template>


<style scoped>

</style>