import { defineStore } from "pinia";
import { computed, ref } from "vue";
import router from "@/router";


export const useBillsStore = defineStore("billsStore", () => {
    console.log("useBillStore defined")
    const bills = ref([]);
    const getBills = async () => {
        const res = await fetch('http://localhost:5000/bills');
        bills.value = await res.json();
    }
    return {
        bills,
        getBills,
    }
})