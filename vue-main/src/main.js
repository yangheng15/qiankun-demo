import Vue from 'vue'
import App from './App.vue'
import router from './router'
import qiankun from './qiankun';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  created() {
    qiankun();
  }
}).$mount('#app')
