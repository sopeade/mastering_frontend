<script setup>
import { ref, computed, onMounted } from 'vue';
import OverviewTab from '@/features/overview/views/OverviewTab.vue';
import TransactionsTab from '@/features/transactions/views/TransactionsTab.vue'
import BudgetsTab from '@/features/budgets/views/BudgetsTab.vue'
import PotsTab from '@/features/pots/views/PotsTab.vue'
import RecurringBillsTab from '@/features/bills/views/RecurringBillsTab.vue'
import overviewIcon from '@/features/overview/components/icons/overview.vue';
import transactionIcon from '@/features/transactions/components/icons/transactions.vue';
import BudgetIcon from '@/features/budgets/components/icons/budgetIcon.vue';
import potsIcon from '@/features/pots/components/icons/pots.vue';
import recurringIcon from '@/features/bills/components/icons/bills.vue';
import { useBudgetsStore } from "@/features/budgets/store/useBudgetsStore.ts";
import { useDashboardStore } from "@/features/dashboard/store/useDashboardStore.ts";
import { storeToRefs } from "pinia";

// const activeTab = ref('overview')
const store = useDashboardStore();
const { activeTab } = storeToRefs(store);

// console.log("overview data smtime during/before fetch: ", budgets.value)
onMounted(async () => {
  console.log("Dashboardview mounted")
  // console.log("Dashboard budget data after fetch: ", budgets.value)
})

const tabs = [
  { name: 'overview', component: OverviewTab, icon: overviewIcon},
  { name: 'transactions', component: TransactionsTab , icon: transactionIcon},
  { name: 'budgets', component: BudgetsTab, icon: BudgetIcon},
  { name: 'pots', component: PotsTab, icon: potsIcon},
  { name: 'recurring-bills', component: RecurringBillsTab, icon: recurringIcon},
]

const activeComponent = computed(() =>
  tabs.find(t => t.name === activeTab.value)?.component
)

</script>

<template>
<!--<div class="h-screen grid grid-rows-[1fr_auto] lg:grid-cols-[240px_1fr] lg:h-full bg-gray-100">-->
<div class="h-screen grid grid-rows-[1fr_auto] lg:grid-cols-[240px_1fr] bg-gray-100">
    <!-- Sidebar -->
    <aside class="flex lg:flex-col h-13 md:h-18.5 lg:h-full px-4 gap-1 md:px-10 lg:px-0 lg:pr-6
    order-2 lg:order-1 bg-black rounded-lg pr-4">

      <!--Logo-->
      <div class="hidden lg:block">
        <img class="w-[121.45px] py-10 pl-8" src="@/assets/images/logo-large.svg" alt="">
      </div>

      <!--tabs-->
        <button
          v-for="tab in tabs"
          :key="tab.name"
          @click="activeTab = tab.name"
          class="w-full h-full lg:h-14 justify-center lg:justify-start lg:pl-8 rounded-t-lg lg:rounded-tl-none
           lg:rounded-r-lg py-2 transition hover:bg-gray-100 hover:text-black"
          :class="activeTab === tab.name
            ? 'bg-gray-100 text-black'
            : ' text-white'">
          <span class="flex gap-4 justify-center md:flex-col lg:flex-row lg:justify-start items-center">
             <span>
                <component :is="tab.icon"
                  class=""
                  :class="activeTab === tab.name
                  ? 'text-green-500'
                  : ''"
                />
             </span>
             <span class="hidden md:block">
               {{ tab.name }}
             </span>
          </span>
        </button>

      <!--Minimize Menu-->
      <button class="hidden lg:flex absolute bottom-10 h-14 gap-4 pl-8">
        <img class="h-6 w-6" src="@/assets/images/icon-minimize-menu.svg" alt="">
        <span class="text-white">Minimize Menu</span>
      </button>
    </aside>

    <!-- Main content -->
    <main class="px-6 h-full lg:order-2 bg-peach overflow-y-auto">
      <keep-alive exclude="OverviewTab" :max="3">
        <component :is="activeComponent" />
      </keep-alive>
    </main>
  </div>
</template>


<style scoped>
.myicon_raw {
  color: red;
}
</style>