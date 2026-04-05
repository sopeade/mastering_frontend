import { defineStore } from "pinia";
import { ref } from "vue";

export const useDashboardStore = defineStore("dashboardStore", () => {
    const activeTab = ref('overview')

    return {
        activeTab,
    }
})