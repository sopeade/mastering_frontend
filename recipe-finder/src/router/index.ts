import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "@/views/HomeView.vue"
const AboutView = () => import("@/views/AboutView.vue")
const RecipeDetailsView = () => import("@/views/RecipeDetailsView.vue")
const RecipesView = () => import("@/views/RecipesView.vue")

const routes = [
    { path: '/',
      name: "home",
      component: HomeView },
    { path: '/about',
      name: 'about',
      component: AboutView },
    { path: '/recipedetails',
      name: 'recipedetails',
      component: RecipeDetailsView},
    { path: '/recipes',
      name: 'recipes',
      component: RecipesView},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router