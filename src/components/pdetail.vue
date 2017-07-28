<template>
	<div id="pro_">
		<div id="pro_detail">
		<mt-header fixed title="EBUY" style='background: #fff;color: #000000;font-size: 0.17rem;z-index: 100;'>
			<router-link to="/home" slot="left">
		  	<mt-button icon="back"></mt-button>		
		    	
		 </router-link>
		  	<mt-button icon="search" slot="right"></mt-button>		
		</mt-header>
			<div class="swiper-container2">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide pd_swiper" v-for="item in goodsBenUrl"><img :src="item"/></div>
			       
				</div>
			</div>
			<div class="pd_tit">
				<div class="pd_left">
					<p>{{arr.goodsName}}</p>
					<p>Original Chionese style</p>
				</div>
				<div class="pd_right">
					<p>￥{{Number(arr.discount)?(arr.price*arr.discount*0.1).toFixed(2):arr.price}}</p>
					<p>￥{{arr.price}}</p>
				</div>
			</div>
			
			<div class="pd_intro">
				<div class="pd_size">
					<p>size</p>
					<div>
						<span>S</span>
						<span>M</span>
						<span class="pd_add">+</span>
					</div>
				</div>
				<div class="pd_color">
					<p>color</p>
					<div>
						<span></span>
						<span></span>
						<span class="pd_add">+</span>
					</div>
				</div>
			</div>
			
			
			<article class="pd_introduce">
				<h4>introduce</h4>
				<p>{{arr.detail}}</p>
			</article>
			
			<article class="pd_commend">
				<h4>commend</h4>
				<div id="pd_wrapper">
					<ul>
						
						<li v-for="item in imgsUrl"><img :src="item"></li>
					</ul>
				</div>
				
			</article>
			<article class="pd_shipping">
				<h4>shipping</h4>
				<p>Peking Opera Avenger Union,white pattern cotton national style T-shirt.</p>
			</article>
			<div class="pd_cart">
			<router-link to="/pay"><span v-on:click="payy()">立即购买</span></router-link>
			<span v-on:click="updateCart()">加入购物车</span>
			
			</div>
		
		</div>
	</div>
	
</template>

<script>
	import $ from 'jquery';
	import { Toast } from 'mint-ui';
	
	export default {
		name:'pro_',				
		data(){
			return{
				arr:{},
				imgsUrl:[],
				goodsBenUrl:[],
				modle:''
			}
		},
	
		beforeCreate(){
			this.modle = this.$route.params.id;
			
			var _this = this;
			$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/getGoods.php",
				async:true,
				data:{goodsID:this.$route.params.id},
				success:function(data){
					data =JSON.parse(data.split('back(')[1].split('])')[0]+']') ;

					_this.arr = data[0];
					console.log(JSON.parse(data[0].goodsBenUrl));
					_this.goodsBenUrl = JSON.parse(data[0].goodsBenUrl);
					_this.imgsUrl = JSON.parse(data[0].imgsUrl);
				}
			});
		},
		methods:{
			payy:function(){
				console.log(this.$route.params.id)
				this.$emit('v-modle',this.$route.params.id)
			},
			updateCart(){
				console.log(22);
				//加入购物车
				var _this =this;
				var username = localStorage.getItem('user');
				if(username){
					$.ajax({
						type:"get",
						url:"http://datainfo.duapp.com/shopdata/updatecar.php",
						async:true,
						data:{userID:username,goodsID:_this.arr.classID,number:1},
						success:function(data){
							if(data==1){
								Toast({
								  message: '加入购物车',
								  position: 'bottom',
								  duration: 2000
								});
							}else{
								Toast({
								  message: '加入购物车失败',
								  position: 'bottom',
								  duration: 2000
								});
							}
						}
					});
				}else{
					//跳转到登录页面
					location.href = '/login'
				}
			}
		},
		mounted(){
			
			
			//swiper初始化			
				var mySwiper1 = new Swiper ('.swiper-container2', {

				})
			
			/*//控制commentd可滚动区域的宽度
			var oLi = $('.commend #wrapper ul li');
			
			$('.commend #wrapper ul').css('width',(oLi.width()+15)*oLi.length);
			//iscroll初始化
			var myscroll = new IScroll('#wrapper',{
				scrollX:true
			})*/
			
			
		}
	}
</script>

<style>
	#pro_detail{
		height: 100vh;
		overflow: auto;
	}
	
	#pro_detail{
		color: #3D4E56;
		padding: 0.4rem 0.2rem 0.5rem;
	}
	 .pd_cart{
		position: fixed;
		bottom: 0;
		left: 0;
		height: 0.5rem;
		background: rgba(210,210,210,0.5);
		width: 100vw;
	}
	 .pd_cart span{
		float: right;
		width: 1rem;
		text-align: center;
		line-height: 0.5rem;
	}
	 .pd_cart span:last-child{
		background: #fff;
		
	}
	#pro_detail .pd_cart span:first-child{
		background: #3D4E56;
		color: #fff;
	}
   .pd_swiper img{
		width: 100vw;
		height:2.6rem
		
	}
	.swiper-container2{
		width: 90vw;
		margin: 0.1rem auto;
		overflow: hidden;
	}
	#pro_detail .pd_tit{
		margin: 0.3rem 0;
		overflow: hidden;
	}
	#pro_detail .pd_tit .pd_left{
		float: left;
		line-height: 0.2rem;
		width: 70%;
	}
	#pro_detail .pd_tit .pd_left p:nth-of-type(2),#pro_detail .pd_tit .pd_right p:nth-of-type(2){
		font-size: 0.12rem;
		color: #B1B8BA;
	}
	#pro_detail .pd_tit .pd_right{
		float: right;
		line-height: 0.2rem;
	}
	#pro_detail .pd_intro{
		overflow: hidden;
		margin-bottom: 0.15rem;
	}
	#pro_detail .pd_intro p{
		font-size: 0.12rem;
		color: #B1B8BA;
		line-height: 0.3rem;
	}
	#pro_detail .pd_intro .pd_size{
		float: left;
	}
	.pd_intro .pd_size span{
		display: block;
		width: 0.3rem;
		height: 0.3rem;
		text-align: center;
		line-height: 0.3rem;
		border: 1px solid #3D4E56;
		border-radius: 50%;
		float: left;
		margin-right:0.12rem;
	}
	#pro_detail .pd_intro .pd_color{
		float: right;
	}
	#pro_detail .pd_intro .pd_color span{
		display: block;
		width: 0.3rem;
		height: 0.3rem;
		float: left;
		margin-right:0.12rem;
		border-radius: 50%;
		text-align: center;
		line-height: 0.3rem;
	}
	#pro_detail .pd_intro .pd_color span:nth-of-type(1){
		background: #FF5053;
	}
	#pro_detail .pd_intro .pd_color span:nth-of-type(2){
		background: goldenrod;
	}
	#pro_detail .pd_intro .pd_add{
		color: #B1B8BA;
		border: 1px solid #B1B8BA;
	}
	
	#pro_detail article{
		border-top: 1px solid #cecece;
		padding: 0.15rem 0;
	}
	#pro_detail article h4{
		color: #B1B8BA;
		font-size: 0.12rem;
		line-height: 0.3rem;
		font-weight: 100;
	}
	#pro_detail .pd_commend{
		overflow: hidden;
	}
	#pro_detail .pd_commend li{
		list-style: none;
		
	}
	#pro_detail .pd_commend li img{
		width: 100%;
	}
	#pro_detail .pd_commend li span{
		font-size: 0.12rem;
		color: #B1B8BA;
	}
</style>