import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import Vant from 'vant'
import 'vant/lib/index.css'
import './common/style/base.less'
// import api from './../axios/index'




createApp(App).use(store).use(router).use(Vant).mount('#app')
