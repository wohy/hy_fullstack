import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import home1 from '../views/Home1'
import home2 from '../views/Home2'
import Detail from '@/views/Detail'

Vue.use(Router)

// const routes = [
//     {
//         path: '/',
//         name: 'Home',
//         component: Home
//     }
// ]

// const router = new Router({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes
// })

// export default router

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: '/',
                    component: home1
                },
                {
                    path: 'home1',
                    component: home1
                },
                {
                    path: 'home2',
                    component: home2
                }
            ]
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            beforeEnter: (to, from, next) => {
                // console.log(to);
                // console.log(from);
                next()
            }
        },
        {
            path:'/detail',
            name:'Detail',
            component: Detail,
            // redirect: '/login'
        }
    ]
})