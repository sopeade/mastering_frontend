<script setup>
import searchIcon from '@/assets/images/icon-search.svg';
import Pagination from "@/components/Pagination.vue";
import {computed, ref, onUnmounted, onMounted, watch} from "vue";
import {showSign} from "@/utils/helpers.ts";
import dropdown from "@/components/dropdown.vue"
import { getUniqueCategory, sortOptions, sortBy } from "@/utils/helpers.ts";
import { useTransactionStore } from "@/features/transactions/store/useTransactionStore.ts";
import {storeToRefs} from "pinia";
import Dropdown from "@/components/dropdown.vue";
import recurringIcon from '@/features/bills/components/icons/bills.vue';
import AddTransaction from "@/features/transactions/components/addTransaction.vue";

const store = useTransactionStore();
const { categoryOptions, categorySelection, transactions, useDefaultCategory } = storeToRefs(store);
// const { categorySelection, transactions } = storeToRefs(store);

const currentPage = ref(1);
const perPage = ref(15);
const transactionData = ref([...transactions.value]);
const sortingSelection = ref('')
// const categorySelection = ref('')
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  const end   = start + perPage.value;
  return transactionData.value.slice(start, end);
})
const isAddTransaction = ref(false);
const showAddTransaction = () => {
  console.log("showAddTransactions")
  isAddTransaction.value = true
}
console.log("categorySelection.value1", categorySelection.value)

watch(sortingSelection, (newVal, _)=>{
  transactionData.value = sortBy(newVal, transactionData.value)
})
watch(categorySelection, (newVal, _) => {
  console.log("categorySelection.value", categorySelection.value)
  console.log("categorySelection changed", newVal)
  currentPage.value = 1;
  if (newVal === "All Transactions"){
    transactionData.value = transactions.value;
    return transactionData.value;
  }
  transactionData.value = transactions.value.filter((obj) => obj.category === newVal)
}, {immediate: true})

onMounted(async () => {
  console.log("----------Transactions Tab mounted---------")
  console.log("categoryOptions T:", categoryOptions.value)
  console.log("categorySelection.value", categorySelection.value)
  // console.log("selectedOption T:", selectedOption.value)
  await store.getTransactions();
  console.log("transactions.value", transactions.value)
})

const onPageChange = (page) => { currentPage.value = page}

onUnmounted(() => {
  console.log("Transaction is unmounted!!!!!")
})


const maxViewedTransactions = 5;

const totalPages = computed(() => {
  return Math.ceil(transactionData.value.length/perPage.value)
})
</script>

<template>
  <section class="flex flex-col gap-8 min-h-[93vh] lg:min-h-full pt-6">
    <div class="flex justify-between">
      <h1 class="text-[32px] font-bold">Transactions</h1>
      <button @click="showAddTransaction" class="flex items-center px-4 cursor-pointer hover:bg-[#9ca3af] bg-black rounded-lg gap-2 text-white">
        <i class="material-icons scale-80">add</i>
        <span class="">Add Transaction</span>
      </button>
    </div>
    <div class="body_local flex-1 flex flex-col justify-between gap-6 bg-white overflow-hidden px-5 py-6 rounded-2xl shadow-cardShadow">
      <div class="flex flex-col gap-10"
          :class="{'h-100': paginatedData.length===0}">
        <div class="search_bar_local h-11.25">
          <div class="flex justify-between">
            <input class="search_icon_local basis-3/4 md:basis-auto md:w-51.25 cursor-pointer
            border rounded-lg border-[#9ca3af] hover:border hover:border-black"
                   placeholder="Search transaction" type="text">
            <img class="md:hidden self-center w-5 h-5" src="@/assets/images/icon-sort-mobile.svg" alt="">
            <img class="md:hidden self-center w-5 h-5" src="@/assets/images/icon-filter-mobile.svg" alt="">
            <div class="search_labels_local hidden md:flex gap-5">
              <div class="flex gap-2">
                <label class="self-center text-[14px]" for="sort">Sort by</label>
                <dropdown :items="sortOptions" select-default-text="Latest" select-width="7.5rem" select-height="45px" @updatedOption="val => sortingSelection=val"
                          id="sort"/>
              </div>
              <div class="flex basis-1/12 gap-2">
                <label class="self-center text-[14px]" for="category">Category</label>
                <dropdown class="" :items="categoryOptions" :select-default-text="categorySelection"
                          :use-default-text="useDefaultCategory" select-width="13rem"
                          select-height="45px" @updatedOption="val => categorySelection=val"
                          id="category"/>
              </div>
            </div>
          </div>
        </div>
        <table v-if="paginatedData.length" class="table_local w-full">
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
                  :class="{'border-b-0': idx === paginatedData.length - 1, 'md:border-t': idx === 0}"
                  v-for="(item, idx) in paginatedData" :key="item.id">
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
        <div v-if="paginatedData.length === 0 " class="grid gap-5 mx-auto my-auto">
          <recurring-icon class="mx-auto scale-290"/>
         <p>No transactions Present</p>
       </div>
      </div>

      <Pagination v-if="paginatedData.length" :currentPage=currentPage :perPage=perPage :totalPages=totalPages @pageChanged="onPageChange"/>
    </div>
  </section>
  <add-transaction v-if="isAddTransaction" @close-modal="isAddTransaction=false"/>
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
