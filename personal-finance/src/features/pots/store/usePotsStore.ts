import { defineStore } from "pinia";
import { ref } from "vue";


export const usePotsStore = defineStore("potsStore", () => {
    const pots: any = ref([]);
    const getPots = async () => {
        const res = await fetch('http://localhost:4000/pots');
        pots.value = await res.json();
        pots.value.forEach((obj:any)=> {
            obj.id = Number(obj.id)
        })
        console.log("starting pots.value", pots.value[0]?.id, typeof(pots.value[0]?.id))
    }
    return {
        pots,
        getPots,
    }
})