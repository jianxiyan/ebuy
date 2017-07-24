import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import Index from './components/index.vue'
import Cart from './components/cart.vue'
import Home from './components/home.vue'
import Start from './components/start.vue'
import Pdetail from './components/pdetail.vue'
Vue.use(VueRouter)
Vue.use(MintUI)
//路由
var routes = [	
	{path:'/',component:Start},
	{path:'/index',component:Index,'children':[		
		{path:'/home',component:Home},		
		{path:'/cart',component:Cart},
		{path:'/*',redirect:'/home'}
	]},
	{path:'/pdetail/:id',component:Pdetail},
	{path:'*',redirect:'/'}
]

var router = new VueRouter({
	routes:routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
