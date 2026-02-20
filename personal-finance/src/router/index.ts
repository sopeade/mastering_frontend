import { createRouter, createWebHistory } from 'vue-router'

import LoginView from "@/features/login/views/LoginView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',
    name: "Login",
    component: LoginView},

    {path: '/Dashboard',
      name: "Dashboard",
      component: () => import("@/features/dashboard/views/DashboardView.vue")},
  ],
})

export default router