import { defineStore } from "pinia";
import { ref } from "vue";


export const useBudgetsStore = defineStore("budgetsStore", () => {
    const budgets = ref([]);
    const getBudgets = async () => {
        const res = await fetch('http://localhost:3000/budgets');
        budgets.value = await res.json();
    }
    return {
        budgets,
        getBudgets,
    }
})