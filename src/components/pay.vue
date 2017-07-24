<template>
	<div id="pay">
		<div class="adr">
			<p><span>收货人：</span><span>JORDAN</span><span>15715712345</span></p>
			<p><span>身份证：</span><span>330683199202111111</span></p>
			<p><span>收货地址：</span><span>上海市黄浦区中山东1路外滩一号</span></p>
		</div>
		<div class="product">
			<ul class="cart_list" id="cartList">
				<li class="cart_list_con" v-for='item in arr'>
					<p class="pay_tit">美国亚马逊发货 跨境电商线</p>
					<img :src="item.imgUrl"  />
					<div class="cart_js">
						<p class="cart_goods_title">{{item.title}}</p>
						<p class="cart_size">尺码：{{item.size}}</p>
						<p class="cart_price"><span class="cart_price_new">￥{{item.price}}</span><span class="cart_price_old">{{item.price}}</span></p>
						<p class="cart_nums"><span class="cart_add">数量:X</span><span class="cart_add">{{item.num}}</span>										</p>
					</div>
					<div class="pay_za">					
						<p class="pay_pr"><span>官网运费：</span><span>{{item.gwyf}}</span></p>
						<p class="pay_pr"><span>商品总额：</span><span>￥1999.00</span></p>
						<p class="pay_pr"><input type="text" name="" class="beizhu" value='备注：'/></p>
					</div>

				</li>

			</ul>
					
			
		</div>
		<div class="pay_price">
						<div>
							<p class="pay_xj">共1件，应付款：￥2829.50</p>
							<p class="pay_xj">我同意《服务协议》</p>
						</div>
						<button type="button" class="pay_prices">提交订单</button>
		</div>	
	</div>
</template>

<script>
	export default{
		name:'pay',
		data(){
	  		return{
	  			arr:[
	  				 {'title':'海澜之家短裤','imgUrl':'src/common/img/QQ截图20170719210118.png','price':'370','size':'L','num':'2','gwyf':"50.00",'bz':'拜托发顺丰快递'},
			  		 {'title':'海澜之家短裤','imgUrl':'src/common/img/QQ截图20170719210118.png','price':'370','size':'M','num':'1','gwyf':"20.00",'bz':'快点过来'},
			  		 {'title':'海澜之家短裤','imgUrl':'src/common/img/QQ截图20170719210118.png','price':'370','size':'S','num':'3','gwyf':"30.00",'bz':'尺码拍错了拜托换成M码'}
			  		 ],
			  	nums:0
	  			}
  		},
 		
  		beforeMount(){
  			var cartadd=document.getElementsByClassName('cart_add')
  			for(var i=0;i<cartadd.length;i++){
  				cartadd[i].innerHTML
  			}
  			
  		},
  		mounted(){
  			
  		}
  		
	}
</script>

<style>
	ul,ol{
		list-style: none;
	}
	#pay{background: #eee;}
	.adr{padding: 0.15rem;background: #fff;}
	.adr p{height: 0.2rem;font-size: 0.14rem;line-height: 0.2rem;}
	.pay_pr{padding:0 0.08rem;height: 0.3rem;font-size: 0.14rem;border-bottom:1px solid #ccc ;line-height: 0.3rem;}
	
	.pay_pr span:last-child{float: right;}
	.pay_pr:nth-of-type(1){border-top:1px solid #ccc}
	.beizhu{width: 96vw;height: 0.25rem;border: none;}
	.pay_xj{font-size: 0.12rem;line-height: 0.2rem;padding-left: 0.1rem;}
	.pay_price{display: flex;background: #fff;}
	.pay_price div{flex: 3;}
	.pay_prices{flex: 1;float: right;border: none;background: #000;color: #fff;height: 0.4rem;padding: 0 0.3rem;}
	.cart_nums{ position: absolute;right: 0.1rem;top: 0.66rem;}
	.cart_list{
		width: 100vw;
		height: auto;
		
	}
	.cart_list_con{
		width: 100vw;
		height: 2.5rem;
		background: #fff;
		margin-top:0.1rem ;
		position: relative;
	}
	.pay_tit{height:0.3rem;font-size:0.14rem ;font-weight: 600;border-bottom:1px solid #ccc ;line-height: 0.3rem;padding-left:0.15rem ;}

	.cart_list_con img{
		height: 1rem;
		width: 1rem;
		margin: 1vh;
		display: block;
	}
	.cart_js{
		width: 60%;
		position: absolute;
		top: 0.3rem;right: 0;
		
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


	.cart_add{
		float: left;
		height: 0.15rem;
		font: 0.14rem/0.15rem "微软雅黑";
		text-align: center;

	}


</style>