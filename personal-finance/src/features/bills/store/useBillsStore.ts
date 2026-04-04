import { defineStore } from "pinia";
import { computed, ref } from "vue";
import router from "@/router";
import { getOrdinal } from "@/utils/helpers.ts";
import type { Bill } from "@/utils/helpers.ts";


export const useBillsStore = defineStore("billsStore", () => {
    console.log("useBillStore defined")
    const bills = ref([]);

    const today = new Date();
    const day = today.getDate();

    const getBills = async () => {
        const res = await fetch('http://localhost:5000/bills');
        const data = await res.json();
        bills.value = data;
        data.forEach((obj: Bill, idx:number) => {
            const day = getOrdinal(Number(obj.date))
            obj.date = `Monthly-${obj.date}${day}`
        })
        console.log("data", data)
    }

        return {
        bills,
        getBills,
    }
})
//     // if data changes.
//     //   run ordinal on dates
//     //   run fnc for paid bills
//     //   run fnc for upcoming
//     //   run fnc ror due soon
//
//     return {
//         bills,
//         dayOrdinal,
//         getBills,
//     }
// })