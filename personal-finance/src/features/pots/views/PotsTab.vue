<script setup>
import potCard from "@/features/pots/components/potCard.vue";

</script>

<template>
  <section class="grid gap-8 pt-6">
    <div class="name-header flex justify-between h-11.25">
      <p class="font-bold text-[32px]">Pots</p>
      <button class="flex items-center px-4 bg-black rounded-lg text-white">
        <i class="material-icons scale-80">add</i>
        <span>Add New Pot</span>
      </button>
    </div>
    <div class="flex flex-col lg:flex-row lg:flex-wrap gap-6">
      <pot-card pot-name="myname" :target=2000 color="bg-green-500"/>
      <pot-card pot-name="myname" :target=2000 color="bg-blue-500"/>
      <pot-card pot-name="myname" :target=2000 color="bg-red-500"/>
      <pot-card pot-name="myname" :target=2000 color="bg-green-500"/>
      <pot-card pot-name="myname" :target=2000 color="bg-green-500"/>
    </div>

  </section>
</template>


<style scoped>

</style>