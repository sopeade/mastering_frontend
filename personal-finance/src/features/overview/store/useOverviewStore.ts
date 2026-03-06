import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { usePotsStore } from "@/features/pots/store/usePotsStore.ts";
import { useBudgetsStore } from "@/features/budgets/store/useBudgetsStore.ts";
import { useBillsStore } from "@/features/bills/store/useBillsStore.ts";
import {useTransactionStore} from "@/features/transactions/store/useTransactionStore.ts";


export const useOverviewStore = defineStore("overviewStore", () => {
    const potsStore = usePotsStore();
    const budgetsStore = useBudgetsStore();
    const billsStore = useBillsStore();
    const transactionStore = useTransactionStore();

    const { getPots } = potsStore;
    const { getBudgets } = budgetsStore;
    const { getTransactions } = transactionStore;

    const { pots } = storeToRefs(potsStore);
    const { budgets } = storeToRefs(budgetsStore);
    const { transactions } = storeToRefs(transactionStore);

    const potsSummary = computed(()=>{
        let total:number = 0;
        // let items: Record<string,number> = {};
        let items: Array<{name:string, saved:number, color: string}>  = [];
        pots.value.forEach((pot: any, idx: number) => {
            total += pot.saved;
            items.push({
                name:pot.name,
                saved:pot.saved,
                color: "border-" + pot.color})
            // items[obj.name] = obj.saved;
        })
        return {total, items}

    })

    const budgetsSummary = computed(() => {
        let spent: number = 0;
        let limit: number = 0;
        // let items: Record<string, string|number> = {};
        let items: Array<{category:string,
            max:number, color: string}> = [];
        budgets.value.forEach((budget: any, idx: number) => {
            spent += budget.spent;
            limit += budget.max;
            items.push({
                category: budget.category,
                max: budget.max,
                color: "border-" + budget.color, //This will be passed in as a dynamic tailwind property e.g. border-red
            })
        })
        return {spent, limit, items}
    })

    console.log("pots in store", pots.value)
    return {
        getPots,
        getBudgets,
        getTransactions,
        potsSummary,
        budgetsSummary,
    }
})