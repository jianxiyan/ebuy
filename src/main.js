import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import Index from './components/index.vue'
import Cart from './components/cart.vue'
import Home from './components/home.vue'
import Start from './components/start.vue'
import Pdetail from './components/pdetail.vue'
import Personal from './components/personal.vue'
import Lgreg from './components/lg_reg.vue'
import Login from './components/login.vue'
import Regist from './components/regist.vue'
import Pay from './components/pay.vue'
import Psat from './components/psat.vue'
Vue.use(VueRouter)
Vue.use(MintUI)
//路由
var Pd = null;
if(localStorage.getItem("user")){
	
	Pd = Personal
}else{
	Pd = Lgreg
}

var routes = [	
	{path:'/',component:Start},
	{path:'/index',component:Index,'children':[		
		{path:'/home',component:Home},		
		{path:'/cart',component:Cart},
		
		{path:'/',redirect:'/home'}
		
	]},
	{path:'/pdetail/:id',component:Pdetail},
	{path:'/pay',component:Pay},
	{path:'/personal',component:Pd},
	{path:'/login',component:Login},
	{path:'/regist',component:Regist},
	{path:'/psat',component:Psat},
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
