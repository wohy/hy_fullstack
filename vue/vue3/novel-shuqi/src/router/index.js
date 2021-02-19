import { createRouter, createWebHistory } from 'vue-router'
import Recommend from "@/views/recommend"
import bookCity from '@/views/bookCity'

const routes = [
  {
    path: '/',
    name: 'bookCity',
    component: bookCity,
    children: [
      {
        path: '/',
        component: Recommend
      },
      {
        path: '/recommend',
        component: Recommend
      },
      {
        path: '/girls',
        name: 'girlsArea',
        component: () => import('@/views/girlsArea.vue')
      },
      {
        path: '/boys',
        name: 'boysArea',
        component: () => import('@/views/boysArea.vue')
      },
      {
        path: '/newNovel',
        name: 'newNovel',
        component: () => import('@/views/newNovel.vue')
      }
    ]
  },
  {
    path: '/bookShelf',
    name: 'bookShelf',
    component: () => import('@/views/bookShelf.vue')
  },
  {
    path: '/finding',
    name: 'finding',
    component: () => import('@/views/finding.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user.vue')
  },
  {
    path: '/booksItem',
    name: 'booksItem',
    component: () => import('@/views/booksItem.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
