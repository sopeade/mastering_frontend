import { defineStore } from "pinia";
import { ref } from "vue";


export const usePotsStore = defineStore("potsStore", () => {
    const pots = ref([]);
    const getPots = async () => {
        const res = await fetch('http://localhost:4000/pots');
        pots.value = await res.json();
    }
    return {
        pots,
        getPots,
    }
})