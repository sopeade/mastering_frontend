import {defineStore, storeToRefs} from "pinia";
import {computed, ref} from "vue";
import { getUniqueCategory } from "@/utils/helpers.ts";

export const useTransactionStore = defineStore("transactionStore", () => {
    const transactions = ref([]);
    const getTransactions = async () => {
        const res = await fetch('http://localhost:7000/transactions');
        transactions.value = await res.json();
    }

    const categoryOptions = computed(()=> {
       return ["All Transactions",...getUniqueCategory(transactions.value)]
    })
    console.log("categoryOptions store: ", categoryOptions.value)
    console.log("transactions.value store: ", transactions.value)
    const categorySelection = ref('All Transactions')
    const useDefaultCategory = ref(false);

    return {
        categoryOptions,
        categorySelection,
        transactions,
        useDefaultCategory,
        getTransactions,
    }
})