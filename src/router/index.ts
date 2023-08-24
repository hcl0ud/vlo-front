import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import LoginView from '@/views/Login.vue'
import RegisterView from '@/views/Register.vue'
import WriteView from '@/views/Write.vue'
import Mypage from '@/views/Mypage.vue'
import PostDetail from '@/views/PostDetail.vue'

const routes: any[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/write',
    name: 'Write',
    component: WriteView
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: Mypage
  },
  {
    path: '/post',
    name: 'PostDetail',
    component: PostDetail
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
