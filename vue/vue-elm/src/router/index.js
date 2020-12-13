import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '@/views/goods/goods'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'goods',
    component:Goods
  },
  {
    path:'/comment',
    name:'comment',
    component: () => import('@/views/comment/comment.vue')
  },
  {
    path:'/seller',
    name:'seller',
    component: () => import('@/views/seller/seller.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
