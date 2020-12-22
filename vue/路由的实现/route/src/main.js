import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// Vue.use(plugin) 的一个原则是use的对象必须具备install这个方法，install被调用多时，插件只会安装一次

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
