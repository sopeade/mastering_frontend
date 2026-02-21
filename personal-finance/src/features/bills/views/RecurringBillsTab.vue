<script setup>
import {ref} from "vue";

const bills = ref([
  {'name': 'Elevate Education',
    'category': 'personal Care',
    'amount': 75.50,
    'date': '19/08/2024'},
  {'name': 'Bravo Zen Spa',
    'category': 'personal Care',
    'amount': 75.50,
    'date': '19/08/2024'},
  {'name': 'Charlie Electric Company',
    'category': 'personal Care',
    'amount': -75.50,
    'date': '19/08/2024'},
  {'name': 'Delta Taxi',
    'category': 'personal Care',
    'amount': 75.50,
    'date': '19/08/2024'},
  {'name': 'Urban Services Hub',
    'category': 'personal Care',
    'amount': 75.50,
    'date': '19/08/2024'},
  {'name': 'whats good',
    'category': 'personal Care',
    'amount': -5.20,
    'date': '29/09/2020'},
])
</script>

<template>
  <section class="grid gap-8 pt-6">
    <div class="name-header flex justify-between">
      <p class="font-bold text-[32px]">Recurring Bills</p>
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
        <div class="flex-1 lg:flex-none bg-white rounded-xl p-5">
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
      <div class="grid gap-6 lg:flex-3 bg-white px-5 py-6 rounded-xl">
        <div class="search_sort_bar_local flex items-center justify-between gap-6 h-11.25">
          <input class="search_icon_local basis-4/5 md:basis-1/2 h-full border rounded-lg border-gray-200"
                 placeholder="Search bills" type="text">
          <img class="h-5 w-5 md:hidden" src="@/assets/images/icon-sort-mobile.svg" alt="">
          <div class="hidden md:flex gap-2 h-full">
            <label class="self-center text-[14px]" for="sort">Sort by</label>
            <input class="w-30 border rounded-lg border-gray-200" type="text" id="sort">
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
                  <p>x</p>
                  <p>{{bill.amount}}</p>
                </div>
              </td>
              <td class="hidden md:table-cell">x</td>
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