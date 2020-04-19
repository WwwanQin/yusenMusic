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
Vue.config.productionTip = false;
// 引入音频文件
import audioSrc from './static/audio/周杰伦 - 不能说的秘密.flac';
Vue.prototype.initAudio = function(){
  let audio = document.querySelector('#audio');
  audio.setAttribute('src',audioSrc);
  Vue.prototype.audio = audio;
}
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
