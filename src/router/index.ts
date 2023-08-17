import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import LoginView from '@/views/Login.vue'
import RegisterView from '@/views/Register.vue'
import WriteView from '@/views/Write.vue'

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
  },
  {
    path: '/Register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/Write',
    name: 'Write',
    component: WriteView
  },
  {
    path: '/Mypage',
    name: 'Mypage',
    component: ''
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
