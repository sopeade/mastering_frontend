<script setup>
import searchIcon from '@/assets/images/icon-search.svg';
import Pagination from "@/components/Pagination.vue";
import {ref} from "vue";
import {showSign} from "@/utils/helpers.ts";
import dropdown from "@/components/dropdown.vue"
import {sortArr} from "@/utils/helpers.ts";

const currentPage = ref(1);
const onPageChange = (page) => { currentPage.value = page}
// const sortArr = ["Latest", "Oldest", "A to Z", "Z to A", "Highest", "Lowest"];

const transactions = ref([
  {'name': 'Emma Richardson',
    'category': 'personal Care',
    'amount': 75.50,
    'date': '19/08/2024'},
  {'name': 'Savory Bites Bistro',
    'category': 'personal Care',
    'amount': 75.50,
    'date': '19/08/2024'},
  {'name': 'Daniel Carter',
    'category': 'personal Care',
    'amount': -75.50,
    'date': '19/08/2024'},
  {'name': 'Sun Park',
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
const maxViewedTransactions = 5;
</script>

<template>
  <section class="flex flex-col gap-8 min-h-[93vh] lg:min-h-full pt-6">
    <h1 class="text-[32px] font-bold">Transactions</h1>
    <div class="body_local flex-1 flex flex-col justify-between gap-6 bg-white overflow-hidden px-5 py-6 rounded-2xl shadow-cardShadow">
      <div class="flex flex-col gap-10">
        <div class="search_bar_local h-11.25">
          <div class="flex justify-between">
            <input class="search_icon_local basis-3/4 md:basis-auto md:w-51.25 cursor-pointer
            border rounded-lg border-gray-200 hover:outline-1 hover:outline-[#696868]"
                   placeholder="Search transaction" type="text">
            <img class="md:hidden self-center w-5 h-5" src="@/assets/images/icon-sort-mobile.svg" alt="">
            <img class="md:hidden self-center w-5 h-5" src="@/assets/images/icon-filter-mobile.svg" alt="">
            <div class="search_labels_local hidden md:flex gap-5">
              <div class="flex gap-2">
                <label class="self-center text-[14px]" for="sort">Sort by</label>
                <dropdown :items="sortArr" select-width="7.5rem" select-height="45px"
                          select-focus-border="1px solid #696868" select-border="1px solid #e5e7eb" id="sort"/>
              </div>
              <div class="flex basis-1/12 gap-2">
                <label class="self-center text-[14px]" for="category">Category</label>
                <dropdown class="pr-10" :items="sortArr" select-width="11rem" select-height="45px"
                          select-focus-border="1px solid #696868" select-border="1px solid #e5e7eb" id="category"/>
              </div>
            </div>
          </div>
        </div>
        <table class="table_local w-full">
            <thead class="hidden md:table-header-group">
              <tr class="text-left text-gray-400 *:pb-3">
                <th class="font-light text-[12px]">Recipient/Sender</th>
                <th class="font-light text-[12px]">Category</th>
                <th class="font-light text-[12px]">Transaction Date</th>
                <th class="font-light text-right text-[12px]">Amount</th>
              </tr>
            </thead>
            <tbody class="">
            <!--Add the gap of top and bottom to height, center with items-center, and then give a bottom border to
            simulate line spacer btw items.            -->
              <tr class="border-b border-gray-200 h-15 md:h-18 *:py-4"
                  :class="{'border-b-0': idx === transactions.length - 1, 'md:border-t': idx === 0}"
                  v-for="(item, idx) in transactions" :key="item.id">
                <td class="flex gap-3 md:gap-4">
                  <img class="h-8 w-8 border rounded-full" src="@/assets/images/icon-pot.svg" alt="">
                  <div class="flex flex-col justify-center">
                    <div class="font-bold text-[14px]">{{ item.name }}</div>
                    <div class="font-light text-[12px] text-gray-400 md:hidden">{{ item.category }}</div>
                  </div>
                </td>
                <td class="hidden font-light text-[12px] text-gray-400 md:table-cell">{{ item.category }}</td>
                <td class="hidden font-light text-[12px] text-gray-400 md:table-cell">{{ item.date }}</td>
                <td class="text-right">
                  <div class="font-bold text-[14px]">{{showSign(item.amount.toFixed(2))}}</div>
                  <div class="font-light text-[12px] text-gray-400 md:hidden">{{ item.date }}</div>
                </td>
              </tr>
            </tbody>
        </table>
      </div>

      <Pagination :currentPage=currentPage :perPage=10 :totalPages=10 @pageChanged="onPageChange"/>
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

.dropdown_local {
  background-image: url('src/assets/images/icon-caret-down.svg');
  background-repeat: no-repeat;
  background-position: right 20px center;
}
</style>
# --------- Inline style equivalent
:style='{backgroundImage: `url("${searchIcon}")`,
backgroundRepeat: "no-repeat",
backgroundPosition: "right 20px center",
padding: "10px 20px"}'
