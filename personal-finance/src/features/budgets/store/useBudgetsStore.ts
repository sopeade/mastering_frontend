import {defineStore, storeToRefs} from "pinia";
import {computed, ref} from "vue";
import { useDashboardStore } from "@/features/dashboard/store/useDashboardStore.ts";
import { useTransactionStore } from "@/features/transactions/store/useTransactionStore.ts";
import { budgetsOverviewData } from "@/utils/helpers.ts";

export const useBudgetsStore = defineStore("budgetsStore", () => {
    const dashboardStore = useDashboardStore();
    const transactionStore = useTransactionStore();
    const { activeTab } = storeToRefs(dashboardStore);
    const { categorySelection, categoryOptions, useDefaultCategory } = storeToRefs(transactionStore);
    const budgets = ref([]);
    const aggregateBudget = ref({})
    const getBudgets = async () => {
        const res = await fetch('http://localhost:3000/budgets');
        budgets.value = await res.json();
        // const budgetSum = ref({})

        budgets.value.forEach((obj:any)=> {
            obj.id = Number(obj.id)

        })
    }
    aggregateBudget.value = computed(()=>{

        return budgetsOverviewData(budgets.value)
    })
    console.log("aggregateBudget.value", aggregateBudget.value)
    console.log("budgetstore categoryOptions: ", categoryOptions)
    return {
        activeTab,
        aggregateBudget,
        budgets,
        categoryOptions,
        categorySelection,
        useDefaultCategory,
        getBudgets,
    }
})