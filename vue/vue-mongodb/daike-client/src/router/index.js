import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'   //输入根路径 重定向到 login页面
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
