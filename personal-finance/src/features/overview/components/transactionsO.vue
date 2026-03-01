<script setup>
import { ref, computed } from 'vue';
import {showSign} from "@/utils/helpers.ts";

const transactions = ref([
  {'name': 'Emma Richardson',
      'amount': 75.50,
      'date': '19/08/2024'},
  {'name': 'Savory Bites Bistro',
      'amount': 75.50,
      'date': '19/08/2024'},
  {'name': 'Daniel Carter',
      'amount': -75.50,
      'date': '19/08/2024'},
  {'name': 'Sun Park',
      'amount': 75.50,
      'date': '19/08/2024'},
  {'name': 'Urban Services Hub',
      'amount': 75.50,
      'date': '19/08/2024'},
  {'name': 'whats good',
    'amount': -5.20,
    'date': '29/09/2020'},
])
const maxViewedTransactions = 5;
</script>

<template>
  <section class="grid bg-white rounded-2xl px-5 py-6 lg:row-start-11 lg:row-span-13  lg:col-start-1 lg:col-span-7
              shadow-cardShadow">
    <div class="flex justify-between mb-8">
      <h1 class="font-bold text-[20px]">Transactions</h1>
      <p class="flex gap-3 cursor-pointer">
        <span>
          View All
        </span>
        <span class="flex max-h-6">
            <img class="h-3 self-center" src="@/assets/images/icon-caret-right.svg" alt="">
        </span>
      </p>
    </div>
    <article class="" v-for="(transaction, idx) in transactions.slice(0, maxViewedTransactions)" :key="transaction.id">
     <div class="flex justify-between max-h-12">
       <div class="flex gap-4 items-center">
         <img class="h-8 w-8 border rounded-full" src="@/assets/images/icon-pot.svg" alt="">
         <p class="font-bold ">{{transaction.name}}</p>
       </div>
       <div>
         <p class="font-bold"
         :class="{'text-green-700': transaction.amount > 0}">
           {{showSign(transaction.amount)}}
         </p>
         <p >{{transaction.date}}</p>
       </div>
     </div>
     <hr class="text-gray-300 my-5"
        :class="{'hidden': idx === maxViewedTransactions - 1}">
    </article>

  </section>
</template>


<style scoped>
</style>
