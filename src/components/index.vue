<template>
<div id="index">			
	<div>
	<mt-header fixed :title="tit" style='background: #fff;color: #000000;font-size: 0.17rem;z-index: 100;'>
			
		    <mt-button icon="back" slot="left" @click="inback"></mt-button>
		 
		  <mt-button icon="search" slot="right"></mt-button>		
	</mt-header>
	
	<div id="in-rong" style="margin-top:0.5rem ; margin-bottom: 0.4rem;">
		<router-view @v-title="title"></router-view>
	</div>
	
	<mt-tabbar fixed>
	  <mt-tab-item  class='in-but'>
	  		<router-link to="/home"><i class="iconfont" @click="tap1">&#xe60b;</i></router-link>	    	
	  </mt-tab-item>
	  <mt-tab-item class='in-but'>
	   	<router-link to="/cart"><i class="iconfont" @click="tap2">&#xe6c9;</i></router-link>
	
	  </mt-tab-item>
	  
	  <mt-tab-item class='in-but'>	    
	     <router-link to="/personal"><i class="iconfont">&#xe64b;</i></router-link>
	  </mt-tab-item>
	</mt-tabbar>
	
	</div>
</div>
</template>

<script>   
	export default {
		name: 'index',
		data(){
			return{
				tit:'Home'
			}
		},
		methods:{
			inback:function(){
				history.back()
			},
			title:function(title){
				this.tit = title 
			},
			tap1:function(){
				this.tit = 'Home'
			},
			tap2:function(){
				this.tit = "cart"
			}
		}
	}	
</script>

<style>
a{
  text-decoration: none;
}
	
@font-face {
  font-family: 'iconfont';  /* project id 358838 */
  src: url('//at.alicdn.com/t/font_5xrkr0clm0nng66r.eot');
  src: url('//at.alicdn.com/t/font_5xrkr0clm0nng66r.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_5xrkr0clm0nng66r.woff') format('woff'),
  url('//at.alicdn.com/t/font_5xrkr0clm0nng66r.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_5xrkr0clm0nng66r.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:0.25rem;font-style:normal;
    color: #666;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    }
    
    
</style>