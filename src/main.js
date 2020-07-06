import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// composition-api
import CompositionApi from '@vue/composition-api'


// 引入全局过滤器

import '@/utils/filter'

//引入flexible
import "amfe-flexible";
Vue.config.productionTip = false

Vue.use(CompositionApi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log(process.env.VUE_APP_URL)
