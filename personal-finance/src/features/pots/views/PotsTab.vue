<script setup>
import { ref, onMounted } from 'vue';
import potCard from "@/features/pots/components/potCard.vue";
import AddPot from "@/features/pots/components/addPot.vue";

import { usePotsStore } from "@/features/pots/store/usePotsStore.ts";
import { storeToRefs } from "pinia";

const store = usePotsStore();
const { pots } = storeToRefs(store);
console.log("mypot is", pots.value)
// console.log("Pots data smtime during/before fetch: ", pots.value)
onMounted(async () => {
  console.log("Pots Tab mounted")
  await store.getPots();
  console.log("Potsdata after fetch: ", pots.value)
})
const isAddPot = ref(false);
const showAddPot = () => {
  console.log("showAddPot")
  isAddPot.value = true
}
</script>

<template>
  <section class="grid gap-8 pt-6">
    <div class="name-header flex justify-between h-11.25">
      <p class="font-bold text-[32px]">Pots</p>
      <button @click="showAddPot" class="flex items-center px-4 bg-black rounded-lg text-white">
        <i class="material-icons scale-80">add</i>
        <span>Add New Pot</span>
      </button>
    </div>
    <div class="flex flex-col lg:flex-row lg:flex-wrap gap-6">
      <pot-card
          v-for="(pot, idx) in pots" :key="pot.idx"
          :id="pot.id" :name="pot.name" :target="pot.target" :saved="pot.saved" :color="pot.color"/>
    </div>
  </section>
  <add-pot v-if="isAddPot" @close-modal="isAddPot=false"/>

</template>


<style scoped>

</style>