import DefaultLayout from '@/layouts/DefaultLayout.vue'
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: { home: true, login: false }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue')
      },
      {
        path: '/sign-up',
        name: 'Register',
        component: () => import('@/views/Register.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Home.vue'),
        meta: { login: true, home: false  }
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
