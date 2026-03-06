import { defineStore } from "pinia";
import { ref } from "vue";


export const useTransactionStore = defineStore("transactionStore", () => {
    const transactions = ref([]);
    const getTransactions = async () => {
        const res = await fetch('http://localhost:7000/transactions');
        transactions.value = await res.json();
    }
    return {
        transactions,
        getTransactions,
    }
})