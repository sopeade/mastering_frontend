<script setup>
import { ref, onMounted, onUnmounted} from "vue";
import Dropdown from "@/components/dropdown.vue";
import { sortOptions } from "@/utils/helpers.ts";
import { useBillsStore } from "@/features/bills/store/useBillsStore.ts";
import { storeToRefs } from "pinia";

const store = useBillsStore();
const { bills } = storeToRefs(store);

// console.log("Bills data smtime during/before fetch: ", bills.value)
onMounted(async () => {
  await store.getBills();
  console.log("bills data after fetch: ", bills.value)
})

onUnmounted(() => {
  console.log("Bills is unmounted")
})
</script>

<template>
  <section class="grid gap-8 pt-6">
    <div class="name-header flex justify-between">
      <h1 class="font-bold text-[32px]">Recurring Bills</h1>
      <button @click="" class="flex items-center px-4 cursor-pointer hover:bg-[#9ca3af] bg-black rounded-lg gap-2 text-white">
        <i class="material-icons scale-80">add</i>
        <span>Add Bill</span>
      </button>
    </div>
    <div class="flex flex-col lg:flex-row gap-6">
      <div class="flex flex-col md:flex-row lg:flex-col lg:min-w-61 gap-3">
        <div class="flex flex-1 md:flex-col lg:flex-none gap-5 px-5 py-6 bg-black rounded-xl">
          <img class="w-10 h-10" src="@/assets/images/icon-recurring-bills.svg" alt="">
          <div class="grid gap-3 text-white">
            <p class="text-[14px] ">Total bills</p>
            <p class="font-bold text-[32px]">$384.98</p>
          </div>
        </div>
        <div class="flex-1 lg:flex-none bg-white rounded-xl p-5 shadow-cardShadow">
          <p class="text-[16px]">Summary</p>
          <p class="flex justify-between items-center h-12.5 border-b border-gray-200">
            <span class="text-[12px]">Paid Bills</span>
            <span class="font-bold">2($320.00)</span>
          </p>
          <p class="flex justify-between items-center h-12.5 border-b border-gray-200">
            <span class="text-[12px]">Paid Bills</span>
            <span class="font-bold">2($320.00)</span>
          </p>
          <p class="flex justify-between items-center h-12.5 text-red-500">
            <span class="text-[12px]">Due Soon</span>
            <span class="font-bold">2($40.00)</span>
          </p>
        </div>
      </div>
      <div class="grid gap-6 lg:flex-3 bg-white px-5 py-6 rounded-xl shadow-cardShadow">
        <div class="search_sort_bar_local flex items-center justify-between gap-6 h-11.25">
          <input class="search_icon_local basis-4/5 md:basis-1/2 cursor-pointer h-full
          border rounded-lg border-[#9ca3af] hover:border-black"
                 placeholder="Search bills" type="text">
          <img class="h-5 w-5 md:hidden" src="@/assets/images/icon-sort-mobile.svg" alt="">
          <div class="hidden md:flex gap-2 h-full">
            <label class="self-center text-[14px]" for="sort">Sort by</label>
            <dropdown :items="sortOptions" select-width="7.5rem" select-height="45px"
                      id="sort"/>
          </div>
        </div>
        <table class="w-full">
          <thead class="hidden md:table-header-group">
            <tr class="text-left *:pb-3">
              <th class="font-light text-[12px]">Bill Title</th>
              <th class="font-light text-[12px]">Due Date</th>
              <th class="font-light text-[12px] text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr class="h-25.25 border-t border-gray-200"
                v-for="(bill, idx) in bills" :key="bill.id">
              <td class="">
                <div>
                  <img src="" alt="">
                  <span>{{bill.name}}</span>
                </div>

                <div class="flex h-full md:hidden justify-between">
                  <p>{{bill.date}}</p>
                  <p>{{bill.amount}}</p>
                </div>
              </td>
              <td class="hidden md:table-cell">{{bill.date}}</td>
              <td class="hidden md:table-cell text-right">{{bill.amount}}</td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>


<style scoped>

.search_icon_local{
  background-image: url('src/assets/images/icon-search.svg');
  background-repeat: no-repeat;
  background-position: right 20px center;
  padding: 10px 20px;
}
</style>