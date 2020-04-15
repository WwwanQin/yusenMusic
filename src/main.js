import Vue from 'vue'
import App from './App.vue'
// 引入vantui组件库
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios;
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
