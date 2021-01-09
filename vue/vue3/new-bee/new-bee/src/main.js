import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp();
app.use(Vant);

createApp(App).use(store).use(router).mount('#app')
