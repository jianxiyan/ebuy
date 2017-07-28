<template>
<div id="person">
	<mt-header fixed title="EBUY" style='background: rgba(0,0,0,0.8);color: #fff;font-size: 0.17rem;z-index: 100;'>
			
		    <mt-button icon="back" slot="left" @click="perback"></mt-button>
		 
		  <mt-button icon="search" slot="right"></mt-button>		
	</mt-header>
	<div class="my_top">
		
		<router-link to="/psat">
			<div class="my_grxx" >			
				<div class="my_tx">			
				</div>			
				<p class="my_id">stan-luo</p>
			</div>
		</router-link>
	</div>
	<div class="my_bb">
		<div class="my_bbc">
			<i class="iconfont">&#xe616;</i>
			<p>待发货</p>
		</div>
		<div class="my_bbc">
			<i class="iconfont">&#xe68d;</i>
			<p>待收货</p>
		</div>
		<div class="my_bbc">
			<i class="iconfont">&#xe632;</i>
			<p>退款售后</p>
		</div>
		<router-link to="/personal/order">
			<div class="my_bbc">
				<i class="iconfont">&#xe623;</i>
				<p>全部订单</p>
			</div>
		</router-link>
	</div>
	<div class="my_cont">
		<div class="my_cb">
			<i class="iconfont">&#xe6e6;</i>
			<p>我的积分</p>
			<i class="iconfont font_r">&#xe603;</i>
		</div>
		<div class="my_cb my_ck">
			<i class="iconfont">&#xe656;</i>
			<p>收货地址</p>
			<i class="iconfont font_r">&#xe603;</i>
		</div>
		<div class="my_cb">
			<i class="iconfont">&#xe601;</i>
			<p>帮助中心</p>
			<i class="iconfont font_r">&#xe603;</i>
		</div>
		<div class="my_cb">
			<i class="iconfont">&#xe62b;</i>
			<p>尺码对照表</p>
			<i class="iconfont font_r">&#xe603;</i>
		</div>
		<div class="my_cb my_ck">
			<i class="iconfont">&#xe62d;</i>
			<p>联系客服</p>
			<i class="iconfont font_r">&#xe603;</i>
		</div>
		<div class="my_cb">
			<i class="iconfont">&#xe602;</i>
			<p>关于我们</p>
			<i class="iconfont font_r">&#xe603;</i>
		</div>
		<div class="my_cb">
			<i class="iconfont">&#xe64b;</i>
			<p>意见反馈</p>
			<i class="iconfont font_r">&#xe603;</i>
		</div>
		<div class="my_cb my_ck">
			<i class="iconfont">&#xe732;</i>
			<p>设置</p>
			<i class="iconfont font_r">&#xe603;</i>
		</div>
	</div>
	<mt-tabbar fixed>
	  <mt-tab-item  class='in-but'>
	  		<router-link to="/home"><i class="iconfont" >&#xe60b;</i></router-link>	    	
	  </mt-tab-item>
	  <mt-tab-item class='in-but'>
	   	<router-link to="/cart"><i class="iconfont">&#xe6c9;</i></router-link>
	
	  </mt-tab-item>
	  
	  <mt-tab-item class='in-but'>	    
	     <router-link to="/personal"><i class="iconfont">&#xe64b;</i></router-link>
	  </mt-tab-item>
	</mt-tabbar>
</div>
</template>

<script>
		
export default {
  name: 'person',
  data () {
    return {
      
    }
  },
  methods:{
  	perback:function(){
				history.back()
			}
  }
}
</script>

<style>	
	
	#person{
		height: 100vh;
		margin:0.4rem 0;
	}
	.my_top{
		height: 120px;
		background: rgba(0,0,0,0.8);
	}
	.my_title{
		height: 0.4rem;
		text-align: center;
		color: white;
		line-height: 0.4rem;
		font-size: 0.18rem;
	}
	.my_grxx{
		height: 0.5rem;
		padding: 0.15rem;
	}
	.my_tx{
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50% 50%;
		background: url(../common/img/tx.jpg) no-repeat;
		background-size: cover;
		float: left;
		margin-right: 0.1rem;
	}
	.my_id{
		font-size: 0.14rem;
		color: white;
		line-height: 0.5rem;
		float: left;
		line-height: 0.5rem;
	}
	.my_bb{
		height: 0.95rem;
		background: white;
		margin-bottom: 0.1rem;
	}
	.my_bbc{
		width: 25%;
		float: left;
		font-size: 12px;
		text-align: center;
		color: black;
	}
	.my_bbc i{
		display: block;
		font-size: 0.3rem;
		padding: 0.15rem 0 0.1rem 0;
	}
	.my_cont{
		width: 100%;
	}
	.my_cb{
		background: white;
		font-size: 0.14rem;
		height: 0.5rem;
		line-height: 0.5rem;
		border-bottom: 1px solid #eee;
	}
	.my_cb i{
		display: block;
		float: left;
		padding: 0 0.15rem;
		font-size: 0.2rem;
	}
	.my_cb p{
		float: left;
	}
	.my_cb .font_r{
		display: block;
		float: right;
		font-size: 0.15rem;
	}
	.my_ck{
		margin-bottom: 0.1rem;
	}
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