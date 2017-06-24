import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import routerConfig from './router/index.js'
import axios from 'axios'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueResource)



const router = new VueRouter(routerConfig);

VueRouter.prototype.goBack = function(){
	this.isBack = true
	window.history.go(-1)
}

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
