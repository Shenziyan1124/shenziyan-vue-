// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/reset.css'
import './assets/js/rem.js'
import './assets/css/iconfont.css'

Vue.config.productionTip = false

// import vBack from "./components/common/back.vue";
// Vue.component("vBack",vBack)

import commonComponents from "./components/common/index";
for(var i in commonComponents){
   Vue.component(i,commonComponents[i]); 
}



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
