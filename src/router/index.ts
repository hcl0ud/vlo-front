import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const routes: any[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginView
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
