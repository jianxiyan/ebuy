<template>
	<div id="pay">
		<mt-header fixed title="EBUY" style='background: #fff;color: #000;font-size: 0.17rem;z-index: 100;'>			
		    <mt-button icon="back" slot="left" @click="ptap"></mt-button>		 
		  <mt-button icon="search" slot="right"></mt-button>		
		</mt-header>
		<div class="adr" style="margin-top:0.4rem ;">
			<p><span>收货人：</span><span>JORDAN</span><span>15715712345</span></p>
			<p><span>身份证：</span><span>330683199202111111</span></p>
			<p><span>收货地址：</span><span>上海市黄浦区中山东1路外滩一号</span></p>
		</div>
		<div class="product">
			<ul class="pay_list" id="cartList">
				<li class="pay_list_con" v-for='item in arr'>
					<p class="pay_tit">美国亚马逊发货 跨境电商线</p>
					<img :src="item.goodsListImg"  />
					<div class="pay_js">
						<p class="pay_goods_title">{{item.goodsName}}</p>
						<p class="pay_size">尺码：{{item.size}}</p>
						<p class="pay_price"><span class="pay_price_new">￥{{Number(item.discount)?(item.price*item.discount*0.1).toFixed(2):item.price}}</span><span class="pay_price_old">{{item.price}}</span></p>
						<p class="pay_nums"><span class="pay_add">数量:X</span><span class="pay_add">{{item.hot}}</span>										</p>
					</div>
					<div class="pay_za">					
						<p class="pay_pr"><span>官网运费：</span><span>20</span></p>
						<p class="pay_pr"><span>商品总额：</span><span>￥{{Number(item.discount)?(item.price*item.discount*0.1).toFixed(2):item.price}}</span></p>
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
		props:['mod'],
		data(){
	  		return{
	  			arr:[],
			  	nums:0,
			  	sum:0
	  			}
  		},
 		methods:{
 			ptap:function(){
  				history.back()
  			}
 		},
 		created(){
 			console.log(this.mod)
 			var _this = this;
			$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/getGoods.php",
				async:true,
				data:{goodsID:_this.mod},
				success:function(data){
					data =JSON.parse(data.split('back(')[1].split('])')[0]+']') ;
					_this.arr = data
					
				}
			});
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
	.pay_nums{ position: absolute;right: 0.1rem;top: 0.66rem;}
	.pay_list{
		width: 100vw;
		height: auto;
		
	}
	.pay_list_con{
		width: 100vw;
		height: 2.5rem;
		background: #fff;
		margin-top:0.1rem ;
		position: relative;
	}
	.pay_tit{height:0.3rem;font-size:0.14rem ;font-weight: 600;border-bottom:1px solid #ccc ;line-height: 0.3rem;padding-left:0.15rem ;}

	.pay_list_con img{
		height: 1rem;
		width: 1rem;
		margin: 1vh;
		display: block;
	}
	.pay_js{
		width: 60%;
		position: absolute;
		top: 0.3rem;right: 0;
		
	}
	.pay_goods_title{
		font: 0.16rem/0.3rem "微软雅黑";
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.pay_size{
		font: 0.12rem/0.3rem "微软雅黑"
	}
	.pay_price{
		font: 0.14rem/0.25rem "微软雅黑"
	}
	.pay_price_new{
		color: red;
		margin-right:0.2rem ;
	}
	.pay_price_old{
		color: #888888;
		text-decoration: line-through;
	}


	.pay_add{
		float: left;
		height: 0.15rem;
		font: 0.14rem/0.15rem "微软雅黑";
		text-align: center;

	}


</style>