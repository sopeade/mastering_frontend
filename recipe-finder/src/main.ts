import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./assets/main.css"
import App from './App.vue'
import router from "@/router";
// import clickOutside from "@/utils/helpers.ts";

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.directive(clickOutside)

app.mount('#app')
