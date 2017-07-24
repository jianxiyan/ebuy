<template>
	<div id="collect">
		<ul class="cart_list">
			<li class="cart_list_con" v-for='(item,i) in arr'>
				<img :src="item.imgUrl"  />
				<div class="cart_js">
					<p class="cart_goods_title">{{item.title}}</p>
					<p class="cart_size">{{item.size}} <span class="cart_clc" @click="tap(i)">删除</span></p>
					<p class="cart_price"><span class="cart_price_new">￥{{item.price}}</span><span class="cart_price_old">{{item.price}}</span></p>
					<p class="cart_sum">
																		
					</p>
				</div>
				
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'collect',
		data(){
			return{
  				arr:[{'title':'海澜之家短裤','imgUrl':'src/common/img/QQ截图20170719210118.png','price':'370','size':'3xl'},{'title':'海澜之家短裤','imgUrl':'src/common/img/QQ截图20170719210118.png','price':'370','size':'3xl'},{'title':'海澜之家短裤','imgUrl':'src/common/img/QQ截图20170719210118.png','price':'370','size':'3xl'}]
				
			}
		},
		methods:{
			tap:function(i){
				this.arr.splice(i,1)
				
				
			}
		},
		
	}
</script>

<style>
	.cart_clc{
		float: right;
		height: 0.2rem;
		width: 0.4rem;
		font: 0.12rem/0.2rem "微软雅黑";
		text-align: center;
		border: 1px solid #333333;
		border-radius: 0.05rem;
		position: relative;
		top: 0.05rem;
	}
	.cart_list_con img{
		height: 1rem;
		width: 1rem;
		float: left;
		margin-left:0.1vw ;
	}
	
	ul,ol{
		list-style: none;
	}
	.cart_list{
		width: 100vw;
		height: auto;
	}
	.cart_list_con{
		width: 94vw;
		padding:2vh 3vw;
		height: 1rem;
	
		margin-top:0.1rem ;
		box-shadow: 1px 0 5px 0 #555555;
	}
	.cart_check{
		float: left;
		margin-right: 0.1rem;
		position: relative;
		top: 40%;
		background: #fff;
		height: 0.2rem;
		border-radius: 50%;
	}
	.cart_list_con img{
		height: 1rem;
		width: 1rem;
		float: left;
		margin-left:0.1vw ;
	}
	.cart_js{
		float: right;
		width: 55%;
		
	}
	.cart_goods_title{
		font: 0.16rem/0.3rem "微软雅黑";
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.cart_size{
		font: 0.12rem/0.3rem "微软雅黑"
	}
	.cart_price{
		font: 0.14rem/0.25rem "微软雅黑"
	}
	.cart_price_new{
		color: red;
		margin-right:0.2rem ;
	}
	.cart_price_old{
		color: #888888;
		text-decoration: line-through;
	}
	.cart_sum{
		height: 0.2rem;		
	}
	
</style>